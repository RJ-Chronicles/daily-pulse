import env from 'dotenv';
import OpenAI from 'openai';

import { ChatGPTError } from '../errors/chat-gpt-error';
import { OpenAIType } from '../types/type.td';

env.config();
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export const openAIRequest = async (messages: OpenAIType[]) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      temperature: 0.2,
    });

    const responseData = response.choices[0].message.content ?? `{}`;
    console.log(responseData);
    return JSON.parse(responseData);
  } catch (error) {
    throw new ChatGPTError(
      'Error while making GTP call: ' + JSON.stringify(error ?? {}),
    );
  }
};
