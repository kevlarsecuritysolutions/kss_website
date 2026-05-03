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

  const {
    firstName,
    lastName,
    email,
    phone,
    streetAddress,
    city,
    locationState,
    postalCode,
    securityLicenceNumber,
    cert2,
    driversLicence,
    whiteCard,
    wwvpCheck,
    trafficControl,
    firearmsLicence,
    message,
    attachments = [],
  } = body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !streetAddress ||
    !securityLicenceNumber
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  const qualifications = [
    driversLicence && "Current Driver Licence",
    whiteCard && "Construction White Card",
    wwvpCheck && "Current WWVP Check",
    trafficControl && "Traffic Control Qualification",
    firearmsLicence && "Security Firearms Licence",
  ].filter(Boolean);

  try {
    await resend.emails.send({
      from: "Form Submission <webmaster@kevlarsecuritysolutions.com.au>",
      // to: ['info@kevlarsecuritysolutions.com.au'],
      to: [
        "jake@haruassembly.com",
        "info@kevlarsecuritysolutions.com.au",
        "gm@kevlarsecuritysolutions.com.au",
        "kyle@kevlarsecuritysolutions.com.au",
      ],
      replyTo: email,
      subject: "New Expression of Interest Application",
      html: `
        <h1>New Expression of Interest — kevlarsecuritysolutions.com.au</h1>
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${streetAddress}, ${city || ""}, ${locationState || ""} ${postalCode || ""}</p>
        <h2>Qualifications</h2>
        <p><strong>Security Licence Number:</strong> ${securityLicenceNumber}</p>
        <p><strong>Certificate II in Security Operations:</strong> ${cert2}</p>
        <p><strong>Additional Qualifications:</strong> ${qualifications.length > 0 ? qualifications.join(", ") : "None"}</p>
        <h2>Additional Information</h2>
        <p>${message || "None provided"}</p>
      `,
      attachments: attachments.map(({ filename, content }) => ({
        filename,
        content: Buffer.from(content, "base64"),
      })),
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
