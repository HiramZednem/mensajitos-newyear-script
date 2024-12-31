import { CSVService } from "./services/CSVService";
import { MessageCreatorService } from "./services/MessageCreatorService";
import { MessageSenderService } from "./services/MessageSenderService";
// import { sendMessage } from "./services/TwilioService";

class App {
    private csvService: CSVService;
    private messageCreatorService: MessageCreatorService;
    private messageSenderService: MessageSenderService = new MessageSenderService();

    constructor(filePath: string, urlFront: string, sender: string) {
        this.csvService = new CSVService(filePath);
        this.messageCreatorService = new MessageCreatorService(urlFront, sender);
    }

    async run() {
        const data = this.csvService.readData();

        // This method adds the URL to the data object
        await this.messageCreatorService.createMessages(data);

        data.map(data => this.messageSenderService.sendToWhatsapp(data.telefono, data.nombre, data.url ?? ''));
        data.map(data => this.messageSenderService.sendToMail(data.correo, data.nombre, data.url ?? ''));
        // Mandar los mensajes por whatsapp utilizando el servicio de Twilio
    }
}



const app = new App('data/data.csv', 'https://mensajitos-newyear-hiram.vercel.app/', 'Hiram');
app.run();






// sendMessage('9613321460', 'Penegrino', 'https://mensajitos-newyear-hiram.vercel.app/6773b1405377746b3ed33a6e')
