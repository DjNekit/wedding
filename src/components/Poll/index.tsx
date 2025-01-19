'use client'

import React, { FC, memo, useState } from 'react';
import Image from 'next/image';
import s from './poll.module.css';

export const Poll: FC = memo(() => {
    const [guests, setGuests] = useState<string[]>(['']);
    const [alco, setAlco] = useState<string | null>(null);
    const [presence, setPresence] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [ok, setOk] = useState(false);
    const [error, setError] = useState('');

    const onGuestAdd = () => {
        setGuests(prev => [...prev, ''])

    }
    const onGuestDelete = () => {
        setGuests(prev => prev.slice(0, -1))
    }

    const onInputChange = (value: string, index: number) => {
        setGuests(prev => {
            const updatedGuestsList = [...prev];
            updatedGuestsList[index] = value;
            return updatedGuestsList;
        })
    }

    const onAlcoChange = (alco: string) => {
        setAlco(alco);
    }

    const onRegisterChange = (presence: string) => {
        setPresence(presence);
    }

    const onSubmit = async () => {
        if (ok) {
            return;
        }
        setError('');
        try {
            const response = await fetch('/api/send-to-telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    guests,
                    alco,
                    presence,
                    message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setOk(true);
            } else {
                setOk(false);
                setError(result.error);
            }
        } catch (error) {
            setOk(false);
            console.error(error);
            // setStatus('Произошла ошибка. Попробуйте позже.');
        }

    };
    return (
        <section>
            <div className={s.questions + ' content'}>
                <div>
                    <div>Заполните анкету:</div>
                    <div className={s.paddingLeft}>
                        {guests.map((guest, index) =>
                            <div key={index} className={s.option}>
                                <input
                                    className={s.nameInput}
                                    placeholder='Введите имя гостя'
                                    value={guest}
                                    onChange={(event) => onInputChange(event.target.value, index)}
                                />
                                {index === guests.length - 1 && index !== 0 &&
                                    <div className={s.exit} onClick={onGuestDelete}>+</div>
                                }
                            </div>
                        )}
                        <button className={s.button + ' ' + s.small} onClick={onGuestAdd}>Добавить гостя</button>
                    </div>
                </div>
                <div>
                    <div>Какой алкоголь вы предпочитаете?</div>
                    <div className={s.block}>
                        <div className={s.option}>
                            <input
                                type="radio"
                                name='1'
                                className={s.input}
                                checked={alco === 'Красное вино'}
                                onChange={() => onAlcoChange('Красное вино')}
                            />
                            <div>Красное вино</div>
                        </div>
                        <div className={s.option}>
                            <input
                                type="radio"
                                name='1'
                                className={s.input}
                                checked={alco === 'Белое вино'}
                                onChange={() => onAlcoChange('Белое вино')}
                            />
                            <div>Белое вино</div>
                        </div>
                        <div className={s.option}>
                            <input
                                type="radio"
                                name='1'
                                className={s.input}
                                checked={alco === 'Шампанское'}
                                onChange={() => onAlcoChange('Шампанское')}
                            />
                            <div>Шампанское</div>
                        </div>
                        <div className={s.option}>
                            <input
                                type="radio"
                                name='1'
                                className={s.input}
                                checked={alco === 'Виски / Коньяк'}
                                onChange={() => onAlcoChange('Виски / Коньяк')}
                            />
                            <div>Виски / Коньяк</div>
                        </div>
                        <label className={s.option}>
                            <input
                                type="radio"
                                name='1'
                                className={s.input}
                                checked={alco === 'Не буду пить алкоголь'}
                                onChange={() => onAlcoChange('Не буду пить алкоголь')}
                            />
                            <div>Не буду пить алкоголь</div>
                        </label>
                    </div>
                </div>
                <div>
                    <div>Планируете ли вы присутствовать на свадьбе?</div>
                    <div className={s.block}>
                        <div className={s.option}>
                            <input
                                type="radio"
                                name='2'
                                className={s.input}
                                checked={presence === 'Буду и в ЗАГСе, и на банкете.'}
                                onChange={() => onRegisterChange('Буду и в ЗАГСе, и на банкете.')}
                            />
                            <div>Буду и в ЗАГСе, и на банкете.</div>
                        </div>
                        <label className={s.option}>
                            <input
                                type="radio"
                                name='2'
                                className={s.input}
                                checked={presence === 'Присоединюсь только на банкете.'}
                                onChange={() => onRegisterChange('Присоединюсь только на банкете.')}
                            />
                            <div>Присоединюсь только на банкете.</div>
                        </label>
                        <label className={s.option}>
                            <input
                                type="radio"
                                name='2'
                                className={s.input}
                                checked={presence === 'Не смогу прийти'}
                                onChange={() => onRegisterChange('Не смогу прийти')}
                            />
                            <div>Не смогу прийти</div>
                        </label>
                    </div>
                </div>
                <div>
                    <div>Можете указать ваши пожелания:</div>
                    <div className={s.paddingLeft}>
                        <div className={s.option}>
                            <textarea
                                name='3'
                                rows={5}
                                className={s.nameInput}
                                onChange={(event) => setMessage(event.target.value)}
                                placeholder='Если у вас есть пожелания, или вы просто хотите поздравить нас, можете написать сюда'
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className={`${s.button} ${ok && s.success}`}
                        onClick={onSubmit}
                    >
                        {ok ? 'Мы получили ваше сообщение :)' : 'Отправить нам'}
                    </button>
                </div>
                <div className={s.error}>
                    {error}
                </div>
            </div>
        </section>
    );
});