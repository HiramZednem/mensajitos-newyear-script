import { config } from 'dotenv'

if(process.env.NODE_ENV !== 'production'){
  config();
}

export const ACCOUNTSID= process.env.ACCOUNTSID;
export const AUTHTOKEN= process.env.AUTHTOKEN;