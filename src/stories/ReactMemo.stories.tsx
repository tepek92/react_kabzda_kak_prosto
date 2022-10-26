import React, {memo, useState} from "react";

export default {
    title: 'Example/ReactMemoTest',
}

type UsersPropsType = {
    users: Array<string>
}
type NumbersPropsType = {
    number: number
}

// export const Users: React.FC<UsersPropsType> = ({users}) => {
//     return <div>{users.map(u => <div>u</div>)}</div>;
// }

const Users = memo(({users}: UsersPropsType) => {
    console.log('Users rendering');
    return <div>{users.map((u,i) => <div key={i}>{u}</div>)}</div>
});

const Numbers = memo(({number}: NumbersPropsType) => {
    console.log('Numbers rendering');
    return <div>{number}</div>;
});

export function Test() {
    console.log('Test rendering');
    const [users, setUsers] = useState(['Pasha', 'Masha', 'Tom', 'Mustag']);
    const [number, setNumber] = useState(0);

    const addUser = () => {
        setUsers([...users, 'NewUser']);
    }

    const addNumber = () => {
        setNumber(number + 1);
    }
    return (
        <div>
            <button onClick={addNumber}>+</button>
            <button onClick={addUser}>ADD USER</button>
            <Numbers number={number} />
            <Users users={users} />
        </div>
    );
}