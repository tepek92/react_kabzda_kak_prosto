import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'Standart input',
    // component: "input",
}

export const DontTrackControlledInput = () => {
    return (
        <input value={"DontTrackControlledInput"}/>
    )
};

export const UnControlledInput = () => {
    return (
        <input/>
    )
};

export const TrackValueOfUnControlledInput = () => {
    const [value, setValue] = useState('')
    const trackValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <><input onChange={trackValue}/> --- {value}</>
    )
};

export const SetValueOfUnControlledInput = () => {

    const [value, setValue] = useState('');
    const refInput = useRef<HTMLInputElement>(null);

    const setValueInput = () => {
        setValue(refInput.current?.value || '')
    }
    return (
        <><input ref={refInput}/>
            <button onClick={setValueInput}>value</button>
            === {value}</>
    )
};

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const trackValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <input value={value} onChange={trackValue}/>
    )
};

export const ControlledCheckBox = () => {
    const [status, setStatus] = useState(true)
    const onChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.checked)
    }

    return (
        <input type={"checkbox"} checked={status} onChange={onChecked}/>
    )
};

export const ControlledSelect = () => {
    const [opt, setOps] = useState<string>('4')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setOps(e.currentTarget.value)
    }

    return (
        <select value={opt} onChange={onChange}>
            <option value={1}>Milk</option>
            <option value={2}>Cola</option>
            <option value={3}>Water</option>
            <option value={4}>Sidr</option>
        </select>
    )
};


