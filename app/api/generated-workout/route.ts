import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export async function GET(req: Request) {
   try {
    const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "openai/gpt-oss-20b",
  });
    const text = completion.choices[0]?.message?.content || "";

    return new Response(JSON.stringify({ result: text }), {
      headers: { "Content-Type": "application/json" },
    });
   } catch (err) {
    return new Response(JSON.stringify({error: err.message}))
   }
}

