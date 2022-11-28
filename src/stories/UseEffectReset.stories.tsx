import React, {useEffect, useState} from "react";

export default {
    title: 'Use Effect and Reset callback',
}

export function UseEffectReset() {
    console.log('Ререндер компоненты');

    const [text, setText] = useState('0');
    useEffect(() => {
    console.log('Запускается useEffect')
        const handler = (e: any) => {
            console.log('Отрабатывает обработчик событий ' + e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler);

        return () => {
            console.log('Зачищается старый useEffect')
            window.removeEventListener('keypress', handler)
        };
    }, [text]);

    console.log('Лог перед return')
    queueMicrotask(() =>  console.log('Микротаска'))
    return (
        <div>
            <div>{text}</div>
        </div>
    )
}