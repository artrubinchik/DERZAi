"use client";

import { useState, useEffect } from "react";
import { content } from "@/data/content";

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
}

type Answers = Record<number, string>;

function calcPrice(answers: Answers): { min: number; max: number } | null {
  const area = answers[2];
  const service = answers[0];
  const level = answers[3];

  if (!area || !service || !level) return null;

  const matrix = content.quiz.priceMatrix;
  const base = matrix.base[area as keyof typeof matrix.base];
  if (!base) return null;

  const serviceMult =
    matrix.multipliers[service as keyof typeof matrix.multipliers] || 1;
  const levelMult =
    matrix.multipliers[level as keyof typeof matrix.multipliers] || 1;

  return {
    min: Math.round((base.min * serviceMult * levelMult) / 1000) * 1000,
    max: Math.round((base.max * serviceMult * levelMult) / 1000) * 1000,
  };
}

function formatPrice(n: number): string {
  if (n >= 1000000) {
    return `${(n / 1000000).toFixed(1).replace(".0", "")} млн`;
  }
  return `${Math.round(n / 1000)} тыс.`;
}

export default function Quiz({ isOpen, onClose }: QuizProps) {
  const [step, setStep] = useState(0); // 0..4 = questions, 5 = result
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setAnswers({});
      setName("");
      setPhone("");
      setSent(false);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  const steps = content.quiz.steps;
  const isLastStep = step === steps.length;
  const price = calcPrice(answers);

  function selectOption(option: string) {
    const newAnswers = { ...answers, [step]: option };
    setAnswers(newAnswers);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(steps.length); // show result
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone) return;

    setSending(true);
    try {
      const priceText = price
        ? `от ${formatPrice(price.min)} до ${formatPrice(price.max)} ₽`
        : "Не рассчитано";

      const message =
        `📋 *Заявка из квиза*\n\n` +
        `👤 Имя: ${name}\n` +
        `📞 Телефон: ${phone}\n\n` +
        `📊 *Ответы:*\n` +
        steps.map((s, i) => `${i + 1}. ${s.question}: ${answers[i] || "—"}`).join("\n") +
        `\n\n💰 *Предварительная стоимость:* ${priceText}`;

      await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-off-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-up">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-gray hover:text-black transition-colors z-10"
        >
          ✕
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-black mb-1">
              {content.quiz.title}
            </h2>
            <p className="text-sm text-gray">{content.quiz.subtitle}</p>
          </div>

          {/* Progress */}
          {!isLastStep && (
            <div className="flex gap-1.5 mb-8">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    i <= step ? "bg-black" : "bg-line"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Questions */}
          {!isLastStep && (
            <div className="animate-fade-in" key={step}>
              <p className="text-xs font-medium tracking-widest uppercase text-gray mb-3">
                Вопрос {step + 1} из {steps.length}
              </p>
              <h3 className="text-lg font-semibold text-black mb-6">
                {steps[step].question}
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {steps[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => selectOption(opt)}
                    className={`text-left px-4 py-3.5 rounded-lg border text-sm font-medium transition-all duration-150 ${
                      answers[step] === opt
                        ? "border-black bg-black text-off-white"
                        : "border-line text-black hover:border-black/30 hover:bg-warm/30"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* Back */}
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-5 text-sm text-gray hover:text-black transition-colors"
                >
                  ← Назад
                </button>
              )}
            </div>
          )}

          {/* Result */}
          {isLastStep && !sent && (
            <div className="animate-fade-in">
              {/* Price display */}
              {price && (
                <div className="bg-black text-off-white rounded-xl p-6 mb-6">
                  <p className="text-xs opacity-60 mb-1 tracking-widest uppercase">
                    Предварительная стоимость
                  </p>
                  <p className="text-2xl font-bold">
                    от {formatPrice(price.min)} до {formatPrice(price.max)} ₽
                  </p>
                  <p className="text-xs opacity-50 mt-2">
                    Точная цена — после консультации и осмотра объекта
                  </p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <p className="text-sm font-medium text-black mb-4">
                  Оставьте контакт — перезвоним в течение 15 минут
                </p>
                <div className="flex flex-col gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-line bg-white text-sm text-black placeholder:text-gray/60 focus:outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-line bg-white text-sm text-black placeholder:text-gray/60 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 bg-black text-off-white text-sm font-semibold rounded-lg hover:bg-dark transition-colors disabled:opacity-50"
                >
                  {sending ? "Отправляем..." : "Получить просчёт"}
                </button>
                <p className="text-xs text-gray text-center mt-3">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </div>
          )}

          {/* Sent */}
          {sent && (
            <div className="text-center py-8 animate-fade-in">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-lg font-bold text-black mb-2">Заявка отправлена</h3>
              <p className="text-sm text-gray">
                Перезвоним вам в течение 15 минут
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 border border-line rounded-lg text-sm text-black hover:border-black transition-colors"
              >
                Закрыть
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
