import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const ourEmail = "info@eahouston.org";
    const { firstName, lastName, email, mobile, message } = body;

    const formData = await resend.emails.send({
      from: "Ekpoma Associaition of Houston <info@eahhouston.org>",
      to: [ourEmail],
      subject: "Message from contact us form",
      react: EmailTemplate({
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
        message: message,
      }),
    });

    return new Response(JSON.stringify(formData), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
