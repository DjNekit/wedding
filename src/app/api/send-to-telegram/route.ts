import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const TELEGRAM_BOT_TOKEN = '7720444493:AAGts5uA38i5zJLHhJLM0I3UtgGgY7PHTJY'; // Ваш токен
  const TELEGRAM_CHAT_ID = '711862373'; // Ваш chat_id

  try {
    // Получаем данные из формы
    const body = await request.json();

    const { guests, alco, isRegistration, message } = body;

    if (guests.every((guest: any) => !!guest === false)) {
        return NextResponse.json({ error: 'Не указаны гости' }, { status: 200 });
    }

    // Формируем текст сообщения
    const text = `
      Новое сообщение с сайта:
      ${guests}
      Предпочитаемый алкоголь: ${alco}
      Присутствие на регистрации: ${isRegistration}
      Пожелание: ${message}
    `;

    // Отправляем сообщение в Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    });

    const data = await response.json();
    console.log(data);
    
    if (!data.ok) {
      return NextResponse.json({ error: 'Не удалось отправить сообщение в Telegram' }, { status: 200 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Ошибка при отправке сообщения' }, { status: 200 });
  }
}
