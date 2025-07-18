import dotenv from 'dotenv';
dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL || '',
  apiURL: process.env.API_URL || '',
};
