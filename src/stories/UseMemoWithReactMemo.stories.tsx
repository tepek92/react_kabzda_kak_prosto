import React, {memo, useMemo, useState} from "react";

export default {
    title: 'Example/UseMemo With ReactMemo',
}

type UsersPropsType = {
    users: Array<string>
}
type NumbersPropsType = {
    number: number
}

const Users = memo(({users}: UsersPropsType) => {
    console.log('Users rendering');
    return <div>{users.map((u,i) => <div key={i}>{u}</div>)}</div>
});

const Numbers = memo(({number}: NumbersPropsType) => {
    console.log('Numbers rendering');
    return <div>{number}</div>;
});

export function UseMemoWithReactMemo() {
    console.log('Test rendering');
    const [users, setUsers] = useState(['Pasha', 'Masha', 'Tom', 'Mustag']);
    const [number, setNumber] = useState(0);

    const addUser = () => {
        setUsers([...users, 'MewUser']);
    }
    const addNumber = () => {
        setNumber(number + 1);
    }

    // Без useMemo фильтрация каждый раз создает новый объект, который передется в Users
    // И React.memo думает, что объект изменен перерисовывает те же значения
    const userElements = useMemo(() => {
        return users.filter(u => u[0] === 'M');
    }, [users]);


    return (
        <div>
            <button onClick={addNumber}>+</button>
            <button onClick={addUser}>ADD USER</button>
            <Numbers number={number} />
            <Users users={userElements} />
        </div>
    );
}