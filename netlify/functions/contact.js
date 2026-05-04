const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request body" }),
    };
  }

  const { firstName, lastName, name, company, email, phone, message, type } =
    body;

  const displayName = name || `${firstName} ${lastName}`;

  if (!displayName.trim() || !email || !phone || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  const subject = type ? `New ${type} Enquiry` : "New Contact Enquiry";

  try {
    await resend.emails.send({
      from: "Form Submission <webmaster@kevlarsecuritysolutions.com.au>",
      to: ["info@kevlarsecuritysolutions.com.au"],
      replyTo: email,
      subject,
      html: `
        <h1>New Form Submission From kevlarsecuritysolutions.com.au</h1>
        ${type ? `<p><strong>Type:</strong> ${type}</p>` : ""}
        <p><strong>Name:</strong> ${displayName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Resend error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
