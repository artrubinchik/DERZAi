"use client";

import { useState, useRef, useEffect } from "react";
import { content } from "@/data/content";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: content.chat.greeting },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Произошла ошибка. Попробуйте позже." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Ошибка соединения. Позвоните нам: " + content.company.phoneDisplay },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 md:right-6 z-40 w-[calc(100vw-32px)] md:w-96 animate-slide-in">
          <div className="bg-off-white border border-line rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]">
            {/* Header */}
            <div className="bg-black px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-sm font-semibold text-off-white">AI-менеджер</p>
                  <p className="text-xs text-gray">DERZAi Group</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray hover:text-off-white transition-colors text-lg leading-none"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-[200px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-black text-off-white rounded-br-sm"
                        : "bg-warm text-black rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-warm rounded-xl rounded-bl-sm px-4 py-2.5">
                    <span className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-gray animate-bounce"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className="border-t border-line p-3 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Написать сообщение..."
                className="flex-1 px-3 py-2 text-sm bg-warm/30 border border-line rounded-lg focus:outline-none focus:border-black transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-3 py-2 bg-black text-off-white text-sm rounded-lg disabled:opacity-40 hover:bg-dark transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 md:right-6 z-40 w-14 h-14 bg-black text-off-white rounded-full shadow-lg flex items-center justify-center hover:bg-dark transition-all hover:scale-105 active:scale-95"
        aria-label="Онлайн-консультация"
      >
        {open ? (
          <span className="text-xl">✕</span>
        ) : (
          <span className="text-2xl">💬</span>
        )}
      </button>

      {/* Tooltip */}
      {!open && (
        <div className="fixed bottom-6 right-20 md:right-24 z-40 animate-fade-in pointer-events-none hidden md:block">
          <div className="bg-black text-off-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap">
            Онлайн-консультация
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-black rotate-45" />
          </div>
        </div>
      )}
    </>
  );
}
