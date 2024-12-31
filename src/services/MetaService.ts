import { META_KEY, META_URL } from '../config';
import axios from 'axios';


export const notificationService = {
    sendMetaVerificationCode: async (phone: string, code: string) => {
        const response = await axios.post(
            META_URL!,
            {
                messaging_product: "whatsapp",
                recipient_type: "individual",
                to: `+52${phone}`,
                type: "template",
                template: {
                    name: "authentication",
                    language: {
                        code: "en_US"
                    },
                    components: [
                        {
                            type: "body",
                            parameters: [
                                {
                                    type: "text",
                                    text: code
                                }
                            ]
                        },
                        {
                            type: "button",
                            sub_type: "url",
                            index: "0",
                            parameters: [
                                {
                                    type: "text",
                                    text: code
                                }
                            ]
                        }
                    ]
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${META_KEY}`  // Token de acceso de Meta
                }
            }
        );
        return response.data;
    
    },
};