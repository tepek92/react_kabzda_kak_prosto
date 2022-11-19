import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemoTest',
}


export function UseMemoTest() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);


    let resultA = useMemo(() => {
        let result = 1;
        for (let i = 1; i <= a; i++) {
            let tmp = 10000000;
            while(tmp !== 0) {
                tmp--;
                const pause = Math.random();
            }
            result = result * i;
        }
        return result;
    }, [a]);

    let resultB = useMemo(() => {
        let result = 1;
        for (let i = 1; i <= b; i++) {
            result = result * i;
        }
        return result;
    }, [b]);


    return (
        <div>
            a: <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            b: <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr />
            <div>Result a = {resultA}</div>
            <div>Result b = {resultB}</div>
        </div>
    );
}