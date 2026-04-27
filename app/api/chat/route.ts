import { NextRequest, NextResponse } from "next/server";
import { content } from "@/data/content";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      // Fallback reply when no API key
      return NextResponse.json({
        reply:
          "Здравствуйте! Для консультации позвоните нам: " +
          content.company.phoneDisplay +
          " или оставьте заявку на сайте.",
      });
    }

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: content.chat.systemPrompt },
          ...messages,
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("OpenAI error:", error);
      return NextResponse.json({
        reply: "Произошла ошибка. Позвоните нам: " + content.company.phoneDisplay,
      });
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || "Уточните вопрос.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("API /chat error:", err);
    return NextResponse.json({
      reply: "Ошибка соединения. Позвоните нам: " + content.company.phoneDisplay,
    });
  }
}
