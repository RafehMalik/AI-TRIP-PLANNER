const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // in .env: REACT_APP_GEMINI_API_KEY=your_real_key

export async function getGeminiResponse(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;

  const res = await fetch(`${url}?key=${API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} - ${res.statusText}`);
  }

  const data = await res.json();
  console.log("Gemini Response:", data);
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
}
