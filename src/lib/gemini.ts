import { GoogleGenerativeAI } from "@google/generative-ai";

// حطي مفتاحك الجديد هنا بين علامات التنصيص
const apiKey = "AIzaSyC5QUbiA3tkFyp_Et2VfXuKIBCW_6sQBis"; 

const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash"
});

export const getAI = () => {
  return genAI;
};

export const MODEL_NAME = "gemini-1.5-flash";
export const SYSTEM_PROMPT = "You are Miftah (مفتاح), an expert AI business advisor...";
