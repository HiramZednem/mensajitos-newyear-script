import { config } from 'dotenv'

if(process.env.NODE_ENV !== 'production'){
  config();
}

export const META_KEY= process.env.META_KEY;
export const META_URL= process.env.META_URL;