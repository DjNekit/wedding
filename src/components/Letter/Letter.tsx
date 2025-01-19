'use client'
import React, { FC, memo } from 'react';
import Image from "next/image";

import s from './letter.module.css';
import dynamic from 'next/dynamic';
// Динамический импорт с отключением SSR
const Counter = dynamic(() => import('../Counter'), {
    ssr: false,
});

interface LetterProps {

}

export const Letter: FC<LetterProps> = memo(() => {
    return (
        <section className={s.wrapper}>
            <div className={`content`}>
                <h1 className={`relative ${s.h1}`}>
                    МЫ ЖЕНИМСЯ
                </h1>
                <div className={s.shadow}>МЫ ЖЕНИМСЯ</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className={`${s.letter} ${s.p}`} style={{ marginTop: 0, display: 'grid', gap: '10px' }}>
                        <div>
                            <p>Дорогие родные, близкие и друзья!</p>
                            <p>Мы счастливы пригласить вас на нашу свадьбу.</p>
                        </div>

                        <div>
                            <p>
                                В этот день мы очень хотим, чтобы вы были рядом с нами,
                                поэтому с огромным удовольствием приглашаем Вас 21 февраля 2025 года в 10:00 на торжественную церемонию нашего бракосочетания, которое состоится в городском  ЗАГСе по адресу: улица Брюгге, 5. 
                                А также будем рады видеть вас на свадебном банкете в ресторане Камелот по адресу бульвар Победы, 5. 
                            </p>
                            
                            
                            
                        </div>
                        <div>
                            Просим всех  «захватить» с собой прекрасное настроение на весь день!
                            Очень надеемся и верим, что вы сможете присутствовать и поддержать нас в этот волшебный для нас день - день создания новой семьи! Просим, в ближайшее время,  дать ответ. Очень ждем вас на НАШЕЙ СВАДЬБЕ!
                        </div>

                    </div>
                </div>
                <div className={s.date}>
                    <div>21 февраля 2025 года</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>

                        <Counter targetDate="2025-02-21T00:00:00" />
                    </div>
                </div>
            </div>
        </section>
    );
});