import MailerService from "./MailerService";
import { sendMessage } from "./TwilioService";

export class MessageSenderService {

    private MailerService: MailerService = new MailerService();
    constructor(){}

    async sendToWhatsapp(phone: string, name: string, web: string): Promise<void> {
        // sendMessage(phone, name, web);
        console.log(`Sending message to ${phone} with name ${name} and web ${web}`);
    }

    async sendToMail(email: string, name: string, web: string): Promise<void> {
        this.MailerService.sendEmail(email, name, web);
        console.log(`Sending message to ${email} with name ${name} and web ${web}`);
    }
}