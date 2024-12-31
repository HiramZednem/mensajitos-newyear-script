import nodemailer, { Transporter } from "nodemailer";
import { SENDER_EMAIL, SENDER_PASSWORD } from "../config";

class MailerService {
  private transporter: Transporter;
  constructor() {
    this.transporter = this.createTransporter();
    console.log(SENDER_EMAIL, SENDER_PASSWORD);
  }

  createTransporter(): Transporter {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD,
      },
    });
  }

  async sendEmail(email: string, name: string, web: string): Promise<void> {
    const mailOptions = {
      from: SENDER_EMAIL,
      to: email,
      subject: "FELIZ AÑO NUEVO",
      text:
        "Hola, te hice una pequeeña web para que la veas, espero que te guste. Aquí tienes el link: " + web,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log(`Correo enviado a ${email}`);
      return info;
    } catch (error) {
      console.error(`No se pudo enviar correo a ${email}:`, error);
      throw error;
    }
  }
}

export default MailerService;
