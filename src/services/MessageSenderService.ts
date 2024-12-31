
export class MessageSenderService {
    constructor(){}

    async sendToWhatsapp(phone: string, name: string, web: string): Promise<void> {
        console.log(`Sending message to ${phone} with name ${name} and web ${web}`);
    }

    async sendToMail(email: string, name: string, web: string): Promise<void> {
        console.log(`Sending message to ${email} with name ${name} and web ${web}`);
    }
}