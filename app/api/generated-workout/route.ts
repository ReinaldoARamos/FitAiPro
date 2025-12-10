import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export async function POST(req: Request) {
   try {
    const body = await req.json();


       const prompt = `
    Gere um treino completo baseado nestas informações:
    Objetivo: ${body.objetivo}
    Experiência: ${body.experiencia}
    Dias de treino: ${body.dias}
    Foco: ${body.foco}
    Restrições: ${body.restricoes}

    Envie em JSON com o seguinte formato:
    {
      "treinoA": [...],
      "treinoB": [...],
      "treinoC": [...]
    }
    `;

    const completion = await groq.chat.completions.create({
     messages: [{ role: "user", content: prompt }],
    model: "openai/gpt-oss-20b",
    temperature: 0.3
  });
  const response = completion.choices[0]?.message?.content;

        return new Response(response, { status: 200 });
   } catch (err) {
   return new Response("Erro ao gerar treino", { status: 500 });
   }
}

