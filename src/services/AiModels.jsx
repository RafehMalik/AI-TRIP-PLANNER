// To run this code you need to install the following dependency:
// npm install google-genai

import { Client, types } from "google-genai";

async function generate() {
  const client = new Client({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const model = "gemini-2.5-pro";
  const contents = [
    new types.Content({
      role: "user",
      parts: [types.Part.fromText("INSERT_INPUT_HERE")],
    }),
  ];

  const tools = [
    new types.Tool({
      googleSearch: new types.GoogleSearch({}),
    }),
  ];

  const generateContentConfig = new types.GenerateContentConfig({
    thinkingConfig: new types.ThinkingConfig({
      thinkingBudget: -1,
    }),
    tools,
  });

  const stream = client.models.generateContentStream({
    model,
    contents,
    config: generateContentConfig,
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.text);
  }
}

generate().catch(console.error);
