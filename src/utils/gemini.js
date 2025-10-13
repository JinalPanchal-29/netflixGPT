import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API } from "./constant";

// Make sure your key is in .env as VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(GEMINI_API);

export const fetchGeminiMovies = async (query) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
  Act as a movie recommendation agent and suggest 10 movies for this query: "${query}".
  Respond only with comma-separated movie names. 
  Example: Dhamaal,3 Idiots,Golmaal,Hera Pheri,Chup Chup Ke
  Do not include any text or explanation before or after the JSON. Give exact movie in the response not movie names which contains those names Example if its Dhamal then return Dhamal dont send extra movies like total dhamal etc.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
};
