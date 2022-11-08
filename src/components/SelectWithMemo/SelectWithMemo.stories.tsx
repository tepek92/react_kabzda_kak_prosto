import React, {useMemo, useState} from 'react';
import {ItemsType, SelectWithMemo} from "./SelectWithMemo";

export default {
    title: 'Example/SelectWithMemo',
}


export const SelectsWithMemo = () => {

    const [items, setItems] =  useState<ItemsType[]>([
        {value: 1, title: "Russia", visited: true, language: 'russian'},
        {value: 2, title: "USA", visited: false, language: 'english'},
        {value: 3, title: "Canada", visited: true, language: 'english'},
        {value: 4, title: "Ukraine", visited: false, language: 'ukrainian'},
        {value: 5, title: "Belarus", visited: true, language: 'belarusian'},
        {value: 6, title: "Germany", visited: false, language: 'english'},
        {value: 7, title: "UK", visited: true, language: 'english'},
    ]);

     const reverseItems = () => {
         setItems([...items].reverse());
     }

    const [count, setCount] = useState(0);
    const onClick = () => setCount(count + 1);

    const [value1, seValue1] = useState(0);
    const onClick1 = (newValue: number) => seValue1(newValue);

    const [value2, seValue2] = useState(0);
    const onClick2 = (newValue: number) => seValue2(newValue);

    const [value3, seValue3] = useState(0);
    const onClick3 = (newValue: number) => seValue3(newValue);

    const titleFilter = useMemo(() => items.filter(c => {
        console.log('titleFilter')
        return c.title[0] === 'U'
    }), [items]);
    const languageFilter = useMemo(() => items.filter(c => {
        console.log('languageFilter')
        return c.language !== 'english'
    }), [items]);
    const visitedFilter = useMemo(() => items.filter(c => {
        console.log('visitedFilter')
        return c.visited
    }), [items]);

    // const titleFilter = items.filter(c => {
    //     console.log('titleFilter')
    //     return c.title[0] === 'U'
    // });
    // const languageFilter = items.filter(c => {
    //     console.log('languageFilter')
    //     return c.language !== 'english'
    // });
    // const visitedFilter = items.filter(c => {
    //     console.log('visitedFilter')
    //     return c.visited
    // });


    return <div>

        Страны на U
        <SelectWithMemo items={titleFilter} onClick={onClick1} value={value1}/>
        Страны не с английским языком
        <SelectWithMemo items={languageFilter} onClick={onClick2} value={value2}/>
        Страны, который посетил
        <SelectWithMemo items={visitedFilter} onClick={onClick3} value={value3}/>
        Счетчик
        <button onClick={onClick}>{count}</button>
        Перевернуть пользователей
        <button onClick={reverseItems}>Жмяк!</button>

    </div>


}
