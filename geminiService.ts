
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function getSmartQuoteAdvice(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are a professional bird control expert consultant for "BirdBarrier India".
        Your goal is to help users identify which bird control solution they need (Safety Nets, Spikes, Balcony Nets, or Industrial Protection).
        Be professional, helpful, and concise. 
        If they describe a balcony, recommend 0.8mm invisible polymer nets. 
        If they describe ledges, recommend stainless steel spikes. 
        Always mention the 5-year warranty. 
        End by encouraging them to book a free site visit.
        Keep answers under 100 words.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base. Please call us directly at +91-98765 43210 for immediate assistance.";
  }
}
