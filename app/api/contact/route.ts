import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'

export async function POST(request: Request) {
  const formData = await request.formData()
  const result = await sendContactEmail(formData)

  if (result.success) {
    return NextResponse.json({ success: true })
  }

  return NextResponse.json(result, { status: 400 })
}
