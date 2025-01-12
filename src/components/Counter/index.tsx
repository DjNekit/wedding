'use client'

import React, { FC, memo, useEffect, useState } from 'react';

interface CounterProps {
    targetDate: string;
}

// Функция для добавления ведущего нуля
const formatNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

const Counter: FC<CounterProps> = memo(({
    targetDate
}) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, [targetDate]);

    const styleWrap = {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
    }

    const style = {
        display: 'grid',
        gap: 5,
    }
    const style2 = {
        fontSize: '.5em'
    }

    return (
        <div style={styleWrap}>
            <div style={style}>
                <div>{formatNumber(timeLeft.days)}</div>
                <div style={style2}>дней</div>
            </div>
            <div style={style}>
                <div>{formatNumber(timeLeft.hours)}</div>
                <div style={style2}>часов</div>
            </div>
            <div style={style}>
                <div>{formatNumber(timeLeft.minutes)}</div>
                <div style={style2}>минут</div>
            </div>
            <div style={style}>
                <div>{formatNumber(timeLeft.seconds)}</div>
                <div style={style2}>секунд</div>
            </div>
        </div>
    );
});

export default Counter;