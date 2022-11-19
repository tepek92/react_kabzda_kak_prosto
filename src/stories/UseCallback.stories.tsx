import React, {memo, useCallback, useMemo, useState} from "react";

export default {
    title: 'UseCallback',
}

type BooksPropsType = {
    books: Array<string>
    addBooks: () => void
}
type NumbersPropsType = {
    number: number
    addNumber: () => void
}

const Books = memo(({books, addBooks}: BooksPropsType) => {
    console.log('Books rendering');
    return (
        <div>
            {books.map((b, i) => <div key={i}>{b}</div>)}
            <button onClick={addBooks}>addBooks</button>
        </div>
    )
});

const Numbers = memo(({number, addNumber}: NumbersPropsType) => {
    console.log('Numbers rendering');
    return (
        <div>
            <div>{number}</div>
            <button onClick={addNumber}>addNumber</button>
        </div>
    )
});

export function UseCallback() {
    console.log('Test rendering');
    const [books, setBooks] = useState(['HTML', 'React', 'Js/Ts', 'CSS']);
    const [number, setNumber] = useState(0);


    // Почему при отсутствии зависимостей []
    // addBooks отрисовывается постоянно / но не добавляет новые книги
    // addNumber отрисовывает один раз и потом даже родитель не рисует
    // но если добавить книги, то потом намбер опять рисует
    const addBooks = useCallback(() => {
        console.log('Books callback = ' + books);
        setBooks([...books, 'Angular']);
    },[books]);

    const addNumber = useCallback(() => {
        console.log('Number callback = ' +  number);
        setNumber(number + 1);
    }, [number]);

    // Без useMemo фильтрация каждый раз создает новый объект, который передется в Users
    // И React.memo думает, что объект изменен перерисовывает те же значения
    const userElements = useMemo(() => {
        return books.filter(b => b[0] !== 'C');
    }, [books]);

    console.log(userElements);
    console.log(number);
    return (
        <div>
            <Numbers number={number} addNumber={addNumber}/>
            <Books books={userElements} addBooks={addBooks}/>
        </div>
    );
}