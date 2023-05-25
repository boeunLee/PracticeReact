import React from 'react';
import useInput from '../Hook/useInput';

function InputComponent() {
    const [value, OnChange] = useInput("");
    return (
        <>
            <input type="text" onChange={OnChange}/>
            <div>
                {value}
            </div>
        </>
    )
}
export default InputComponent;