import twilio from 'twilio';
import { ACCOUNTSID, AUTHTOKEN } from '../config';

const accountSid: string = ACCOUNTSID || '';
const authToken: string = AUTHTOKEN || '';
const client = twilio(accountSid, authToken);

export const sendMessage = async (phone: string, name: string, web: string): Promise<void> => {
    try {
        const message = await client.messages.create({
            from: 'whatsapp:+5215665854291',
            contentSid: 'HX52f1b1d55bf0e1ec3d1f479c17162c02',
            contentVariables: JSON.stringify({ "1": name, "2": web}),
            to: `whatsapp:+521${phone}`
        });
        console.log(message.sid);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};