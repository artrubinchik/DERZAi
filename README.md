# DERZAi Group — Landing Page

Современный конверсионный лендинг для студии дизайна интерьеров и ремонта под ключ в Набережных Челнах.

## Стек

- **Next.js 14** — App Router
- **React 18**
- **Tailwind CSS**
- **OpenAI API** — AI-чат
- **Telegram Bot API** — уведомления о заявках

## Быстрый старт

```bash
# Установка
npm install

# Копировать и заполнить переменные окружения
cp .env.example .env.local

# Запуск
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000)

## Переменные окружения

Файл `.env.local`:

```env
# Telegram (для уведомлений о заявках)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# OpenAI (для AI-чата)
OPENAI_API_KEY=your_openai_key

# Телефон (виден в браузере)
NEXT_PUBLIC_PHONE=+79171234567

# Ссылки (заменить на реальные)
NEXT_PUBLIC_BRIEF_FORM_URL=https://forms.google.com/...
NEXT_PUBLIC_DZEN_URL=https://dzen.ru/...
```

### Как получить Telegram токен:

1. Откройте [@BotFather](https://t.me/BotFather)
2. Создайте бота: `/newbot`
3. Скопируйте токен в `TELEGRAM_BOT_TOKEN`
4. Получите chat_id: напишите боту, затем откройте `https://api.telegram.org/bot<TOKEN>/getUpdates`

## Структура проекта

```
/app
  page.tsx              # Главная страница
  layout.tsx            # Layout с метатегами и шрифтом
  globals.css           # Глобальные стили
  /api
    /telegram           # POST → отправка заявки в Telegram
    /chat               # POST → AI-чат через OpenAI
  /leads
    page.tsx            # Страница заявок

/components
  Header.tsx            # Шапка с меню
  Hero.tsx              # Первый экран
  Benefits.tsx          # 4 преимущества
  Quiz.tsx              # Квиз-просчёт (модальное окно)
  Projects.tsx          # Реализованные проекты
  Pricing.tsx           # Стоимость услуг
  Founder.tsx           # Основатель
  Testimonials.tsx      # Отзывы
  ContactForm.tsx       # Форма обратной связи
  ChatWidget.tsx        # Floating AI-чат
  StickyBar.tsx         # Мобильный sticky bar
  Footer.tsx            # Подвал

/data
  content.ts            # Все тексты и данные сайта

/public
  /images               # Изображения (добавить вручную)
    hero.jpg
    project-1.jpg
    project-2.jpg
    project-3.jpg
    artem.jpg
```

## Редактирование контента

Все тексты хранятся в одном файле `/data/content.ts`. Это единственный файл, который нужно менять при обновлении информации.

| Что менять | Где |
|---|---|
| Тексты, телефон, адреса | `/data/content.ts` |
| Изображения | `/public/images/` |
| Цвета и шрифты | `tailwind.config.ts` |
| Компоненты | `/components/` |

## Добавление изображений

Положите файлы в `/public/images/`:

- `hero.jpg` — главное фото на Hero-экране
- `project-1.jpg`, `project-2.jpg`, `project-3.jpg` — фото проектов
- `artem.jpg` — фото основателя

Затем в компонентах раскомментируйте блок с `<Image ... />`.

## Деплой на Vercel

```bash
# Установить Vercel CLI
npm i -g vercel

# Деплой
vercel
```

В настройках проекта на Vercel добавьте все переменные из `.env.example`.

## Мобильная версия

Сайт полностью адаптирован для мобильных:
- Hamburger-меню в шапке
- Sticky bar снизу (Просчёт / Бриф / Звонок)
- Адаптивные сетки во всех секциях
- Минимальный touch-target 44px

## API Routes

### `POST /api/telegram`

Отправляет сообщение в Telegram.

```json
{ "message": "Текст заявки в Markdown" }
```

### `POST /api/chat`

AI-чат через OpenAI GPT-4o-mini.

```json
{
  "messages": [
    { "role": "user", "content": "Сколько стоит дизайн 80 кв.м?" }
  ]
}
```

Возвращает:

```json
{ "reply": "Текст ответа от AI" }
```
