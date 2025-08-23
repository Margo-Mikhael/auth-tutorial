import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log(response);
  } catch (error) {
    console.error(`Error sending verification email:`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "31e41df8-809e-4f2d-8d58-b47e092f6ecd",
      template_variables: {
        name: "Test_Name",
      },
    });

    console.log("Welcome Email sent successfully", response);
  } catch (error) {
    console.log("Error Sending welcome email", error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};
