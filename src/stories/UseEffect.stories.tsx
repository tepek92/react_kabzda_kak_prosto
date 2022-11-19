import React, {useEffect, useState} from "react";

export default {
    title: 'Use Effect',
}

export function UseEffect() {
    console.log('rendering');

    const [number, setNumber] = useState(0);
    const [fake, setFake] = useState(0);

    // 1
    // useEffect без зависимостей будет вызваться при каждом рендере
    useEffect(() => {
        console.log('useEffect without deps')});

    // 2
    // useEffect с переданными зависимостями будет вызываться, если они изменятся
    // аналог componentDidUpdate()
    useEffect(() => {
        console.log('useEffect without deps')}, [number]);

    // 3
    // useEffect с пустым массивом зависимойтей, вызовется всего 1 раз
    // работает как componentDidMount() в классовых компонентах
    useEffect(() => {
        console.log('useEffect without deps')}, []);




    const addNumber = () => {
        setNumber(number + 1);
    }
    const addFake = () => {
        setFake(number + 1);
    }

    return (
        <div>
            <button onClick={addNumber}>+</button>
            <div>{number}</div>
            <hr/>
            <button onClick={addFake}>+</button>
            <div>{fake}</div>
        </div>
    );
}