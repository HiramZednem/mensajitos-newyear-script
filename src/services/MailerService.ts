import nodemailer, { Transporter } from "nodemailer";
import { SENDER_EMAIL, SENDER_PASSWORD } from "../config";

class MailerService {
  private transporter: Transporter;
  constructor() {
    this.transporter = this.createTransporter();
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
      subject: "🎆 ¡FELIZ AÑO NUEVO! 🎇",
text: `
🎉 ¡Hola, ${name}! 🎉 

✨ Te hice una pequeña web personalizada con un mensaje para este inicio de año. Espero que te encante. 💻❤️  
🌐 Aquí tienes el link para verla: ${web}  

🎁 Que este año nuevo esté lleno de momentos increíbles, metas cumplidas y mucha felicidad. 🥂🍀  

¡No olvides compartir tu sonrisa con el mundo! 😄🌟  

Con cariño,  
💌 Hiram :)
`,
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
