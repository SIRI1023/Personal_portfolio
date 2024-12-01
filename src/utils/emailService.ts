import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  try {
    // Initialize EmailJS with your public key
    emailjs.init('kkkvBpFHzeEZHHXSg');

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'Sri Naga Sri',
      reply_to: data.email
    };

    const response = await emailjs.send(
      'service_flk6rlt',
      'template_n7eqtyq',
      templateParams
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}