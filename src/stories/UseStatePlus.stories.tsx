import React, {useMemo, useState} from "react";

export default {
    title: 'Use State Plus',
}

const generate = () => {
    // например тут очень сложные/долгие вычисления
    console.log('generate')
    return 1;
}

export function UseState() {
    console.log('rendering');
    // 1
    // если мы будем просто присваивать результат функции переменной
    // вычисление будет производиться после каждой перерисовки,а это очень долго
    //const start = generate();
    // 2
    // можно использовать useMemo
    // const start = useMemo(() => generate(), []);
    // 3
    // А можно сразу передвать функцию, которая вычисляет результат в useState
    // он вычислит его только 1 раз при первом рендере

    const [number, setNumber] = useState(generate);

    const addNumber = () => {
        setNumber(number + 1);
    }

    // в setNumber можно передавать не только значение, но и функцию
    // которая принимает текущий стейт и возвращает новое значение, которое сетается
    const changer = (state: number) => state + 1;

    // setNumber вызовет эту функцию, передаст текущий стейт, и возращенный результат засетает
    return (
        <div>
            <button onClick={() => setNumber(changer)}>+</button>
            <div>{number}</div>
        </div>
    );
}