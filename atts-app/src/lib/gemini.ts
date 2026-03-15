import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini client
export const gemini = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || ''
});
