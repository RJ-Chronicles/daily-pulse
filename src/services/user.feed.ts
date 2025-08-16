import { AdviserResponse } from '../types/type.td';
import { openAIRequest, WriteToFile } from '../utils';

const saveUserFeed = async (description: string) => {
  const systemPrompt = `
You are my personal adviser. I will provide my daily routine details, and you must perform the following tasks:

1. Deeply analyze and understand the meaning behind each sentence I provide.  
2. Correct any grammatical errors or awkward phrasing to produce a polished, clear version of my input.  
3. Based on my input, assess the following aspects of my personal life:
   - Physical health  
   - Emotional well-being  
   - Relationships (social or romantic)  
   - Productivity and work-life balance  
4. Provide empathetic, motivational, and practical feedback based on your assessment.
5. Return your response strictly in the following JSON format:

{
  "description": "Refined and grammatically correct version of the input daily routine.",
  "result": {
    "health": "Assessment of physical health based on the routine.",
    "emotions": "Assessment of emotional or mental state.",
    "relationships": "Insight into social or romantic relationships based on the routine.",
    "productivity": "Work-life balance and efficiency evaluation.",
    "recommendations": [
      "Specific and actionable suggestion 1",
      "Suggestion 2",
      "Suggestion 3"
    ]
  }
}

✅ Ensure:
- The output is valid JSON, parsable with JSON.parse().
- No additional explanation, markdown, or text should appear outside the JSON.
- All values should be helpful, empathetic, and directly related to the input I provide.
`;

  const messages = [
    {
      role: 'system' as const,
      content: systemPrompt,
    },
    {
      role: 'user' as const,
      content: description,
    },
  ];
  const res = (await openAIRequest(messages)) as AdviserResponse;
  WriteToFile(res, 'data.json');
  return res;
};

export { saveUserFeed };
