'use server'

import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const raw = Object.fromEntries(formData)
  const parsed = contactSchema.safeParse({
    ...raw,
    dsgvo: raw.dsgvo === 'on',
  })

  if (!parsed.success) {
    return {
      success: false as const,
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  try {
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
