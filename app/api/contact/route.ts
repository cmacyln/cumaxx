import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  // Placeholder — will integrate Resend in Phase 9
  console.log('Contact form submission:', body)

  return NextResponse.json({ success: true })
}
