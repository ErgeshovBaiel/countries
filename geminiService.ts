
import { GoogleGenAI, Type } from "@google/genai";
import { CountryDetails, Language } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCountryDetails = async (countryName: string, lang: Language): Promise<Partial<CountryDetails>> => {
  const prompt = `Provide detailed information about the country "${countryName}" in ${lang === 'en' ? 'English' : lang === 'ru' ? 'Russian' : 'Kyrgyz'}. 
  Include History (summarized), Ethnicities (list), Languages spoken (list), Population estimate, and Region. 
  Focus on professional and educational tone.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            history: { type: Type.STRING },
            ethnicities: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            languages: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            population: { type: Type.STRING },
            region: { type: Type.STRING }
          },
          required: ["history", "ethnicities", "languages", "population", "region"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      history: "Data currently unavailable.",
      ethnicities: [],
      languages: [],
      population: "Unknown",
      region: "Unknown"
    };
  }
};
