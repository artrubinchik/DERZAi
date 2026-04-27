export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-black mb-4">Заявки</h1>
        <p className="text-gray text-sm">
          Заявки отправляются в Telegram. Настройте переменные окружения в <code>.env</code>:
        </p>
        <div className="mt-4 p-4 bg-warm/30 rounded-lg text-left text-sm font-mono text-black/70">
          <p>TELEGRAM_BOT_TOKEN=...</p>
          <p>TELEGRAM_CHAT_ID=...</p>
        </div>
      </div>
    </div>
  );
}
