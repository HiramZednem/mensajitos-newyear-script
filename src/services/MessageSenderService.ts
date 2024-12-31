import MailerService from "./MailerService";
import { sendMessage } from "./TwilioService";

export class MessageSenderService {

    private MailerService: MailerService = new MailerService();
    constructor(){}

    async sendToWhatsapp(phone: string, name: string, web: string): Promise<void> {
        sendMessage(phone, name, web);
    }

    async sendToMail(email: string, name: string, web: string): Promise<void> {
        this.MailerService.sendEmail(email, name, web);
    }
}