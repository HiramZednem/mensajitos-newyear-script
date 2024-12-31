import { Data } from "./interfaces/data";
import { MessageResponse } from "./interfaces/messageResponse";
import { CSVService } from "./services/CSVService";
import { sendMessage } from "./services/TwilioService";
import axios from 'axios';



const filePath: string = 'data/data.csv';
const csvService = new CSVService(filePath);
const sender = 'Hiram';
const urlFront = 'https://mensajitos-newyear-hiram.vercel.app/';

const data = csvService.readData();
console.log(data);


async function createMessages(data: Data[]) {
    const messages = [];

    for (const item of data) {
        const payload = {
            reciver: item.nombre,
            sender: sender,
            msg: item.mensaje,
        };

        try {
            const response = await axios.post('https://mensajitos-api-495924555478.us-central1.run.app/create', payload);
            const responseData: MessageResponse = response.data
            item.url = `${urlFront}/${responseData._id}`;
            messages.push(item.url);
        } catch (error) {
            console.error('Error creating message:', error);
        }
    }

    return messages;
}

createMessages(data).then((messages) => {
    // console.log('Messages created:', messages);
    console.log('Messages created:', messages.length);
    console.log(data)
});




// sendMessage('9613321460', 'Penegrino', 'https://mensajitos-newyear-hiram.vercel.app/6773b1405377746b3ed33a6e')
