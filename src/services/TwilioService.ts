import twilio from 'twilio';
import { ACCOUNTSID, AUTHTOKEN } from '../config';

const accountSid: string = ACCOUNTSID || '';
const authToken: string = AUTHTOKEN || '';
const client = twilio(accountSid, authToken);

export const sendMessage = async (phone: string, name: string, web: string): Promise<void> => {
    try {
        const message = await client.messages.create({
            from: 'whatsapp:+5215665854291',
            contentSid: 'HXcaed49790ebda4e00a2bba49e85de8d3',
            contentVariables: JSON.stringify({ "1": web }),
            to: `whatsapp:+521${phone}`
        });
        console.log(`whatsapp sent to ${phone} with name ${name}`);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};