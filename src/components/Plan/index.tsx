import React, { FC, memo } from 'react';
import s from './plan.module.css'
import Image from 'next/image';

export const Plan: FC = memo(() => {
    return (
        <section>
            <div className='content'>
                <h1>Расписание:</h1>
                <form className={s.wrap}>
                    <div className={s.plan}>
                        <div className={s.time}>10:00</div>
                        <div>Торжественная роспись
                        Набережная Брюгге, 5</div>
                    </div>
                    <div className={s.arrow}>
                        <Image 
                            src="/arrow.png"
                            width={40}
                            height={40}
                            alt="arrow down"
                            style={{
                                transform: 'rotate(90deg)'
                            }}
                        />
                    </div>
                    <div className={s.plan}>
                        <div className={s.time}>16:00</div>
                        <div>
                            <div>
                                Банкет: Ресторан "Камелот"
                            </div>
                            <div>
                                бульвар Победы, 5
                            </div>
                        </div>
                    </div>
                    <div></div>
                </form>
            </div>
        </section>
    );
});