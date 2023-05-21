import 'dotenv/config';
import { OpenAI } from "langchain/llms/openai";


const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY!, temperature: 0.9 });

const res = await model.call(
  "What is the dat today?"
);
console.log(res);