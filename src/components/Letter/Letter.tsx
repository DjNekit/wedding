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
                <p className={s.p}>Дорогие друзья, родные и близкие!</p>
                <p className={s.p}>Мы счастливы пригласить вас на нашу свадьбу. Для нас очень важно, чтобы вы смогли разделить с нами самое счастливое мгновение в нашей жизни. Порадуйте нас своим присутствием:</p>
                <div className={s.date}>
                    <div>21 февраля 2025 года</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>

                        <Counter targetDate="2025-02-21T00:00:00" />
                    </div>
                </div>
                <p className={s.p}>
                    <span className={s.love}>
                        <Image 
                            src='/love.svg' 
                            width={60}
                            height={16}
                            alt='love'
                        />
                    </span>
                    С любовью, Наташа и Никита
                </p>
            </div>
        </section>
    );
});