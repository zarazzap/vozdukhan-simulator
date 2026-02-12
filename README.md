# VOZDUKHAN SIMULATOR

Русскоязычный веб-чатбот с персонажами.

Поддерживает 2 режима:
- `local templates` (без LLM, работает сразу на GitHub Pages),
- `LLM backend` (лучшее качество через OpenAI или Ollama).

## Frontend (GitHub Pages)

Фронт уже статический:
- `/Users/zarazzap/Desktop/shenanigans/vozdukhan-simulator/index.html`
- `/Users/zarazzap/Desktop/shenanigans/vozdukhan-simulator/styles.css`
- `/Users/zarazzap/Desktop/shenanigans/vozdukhan-simulator/app.js`

На странице есть поле `LLM backend URL (optional)`.
Если оно пустое, используется локальная генерация.
Если указан URL backend, ответы идут через LLM.

## Backend (LLM)

Файлы backend:
- `/Users/zarazzap/Desktop/shenanigans/vozdukhan-simulator/backend/server.js`
- `/Users/zarazzap/Desktop/shenanigans/vozdukhan-simulator/backend/personas.js`
- `/Users/zarazzap/Desktop/shenanigans/vozdukhan-simulator/backend/.env.example`

### Локальный запуск backend

```bash
cd /Users/zarazzap/Desktop/shenanigans/vozdukhan-simulator/backend
cp .env.example .env
npm install
npm start
```

После запуска backend будет на:
- `http://localhost:8787`
- health-check: `http://localhost:8787/health`

### Вариант A: OpenAI (лучшее качество)

В `.env`:
```bash
LLM_PROVIDER=openai
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-4o-mini
```

### Вариант B: Ollama (локально/дешево)

В `.env`:
```bash
LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.1:8b
```

## Как подключить фронт к backend

1. Открой сайт.
2. Вставь backend URL в поле `LLM backend URL (optional)`.
   Пример: `https://your-backend.onrender.com`
3. Нажми `Save`.
4. Статус сменится на `Mode: LLM backend ...`.

## Деплой backend

Проще всего на Render/Railway/Fly/Vercel:
- Root directory: `backend`
- Start command: `npm start`
- Node 18+ (лучше 20+)
- Env vars: как в `.env.example`

Важно:
- API ключи только на backend, не во frontend.
