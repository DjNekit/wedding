import React, { FC, memo } from 'react';
import Image from "next/image";
import s from './header.module.css'

export const Header: FC = memo(() => {
    return (
        <div className={s.wrapper}>
            <div className={s.us}>
                <h1 className={s.h1}>НАТАША & НИКИТА</h1>
                <div className={s.date}>21.02.2025</div>
                <div className={s.invitation}>ПРИГЛАШЕНИЕ НА СВАДЬБУ</div>
            </div>
            <div style={{ position: 'relative', height: '50vh' }}>
            <Image
                src="/us.jpg"
                alt="me and nat"
                fill
                priority
                style={{
                    objectFit: 'cover'
                }}
            />
        </div>
        </div>
    );
});