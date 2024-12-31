import { config } from 'dotenv'

if(process.env.NODE_ENV !== 'production'){
  config();
}

export const ACCOUNTSID= process.env.ACCOUNTSID;
export const AUTHTOKEN= process.env.AUTHTOKEN;
export const SENDER_EMAIL= process.env.SENDER_EMAIL;
export const SENDER_PASSWORD= process.env.SENDER_PASSWORD;