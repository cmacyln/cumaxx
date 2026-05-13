'use server'

import { contactSchema } from '@/lib/validations/contact'

export async function sendContactEmail(formData: FormData) {
  const raw = Object.fromEntries(formData)
  const parsed = contactSchema.safeParse({
    ...raw,
    dsgvo: raw.dsgvo === 'true' || raw.dsgvo === 'on',
  })

  if (!parsed.success) {
    return {
      success: false as const,
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured — email not sent:', parsed.data.email)
    return {
      success: false as const,
      errors: { _form: ['Der Service ist derzeit nicht verfügbar. Bitte versuchen Sie es später.'] },
    }
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'Cumaxx <kontakt@cumaxx.de>',
      to: 'info@cumaxx.de',
      replyTo: parsed.data.email,
      subject: `Neue Anfrage von ${parsed.data.name}`,
      html: `<h1>Neue Kontaktanfrage</h1>
<p><strong>Name:</strong> ${parsed.data.name}</p>
<p><strong>Email:</strong> ${parsed.data.email}</p>
<p><strong>Unternehmen:</strong> ${parsed.data.company || '-'}</p>
<p><strong>Budget:</strong> ${parsed.data.budget || '-'}</p>
<p><strong>Nachricht:</strong></p>
<p>${parsed.data.message}</p>`,
    })

    return { success: true as const }
  } catch {
    return {
      success: false as const,
      errors: { _form: ['Fehler beim Senden. Bitte versuchen Sie es später.'] },
    }
  }
}
