import React from 'react';
import useInput from '../Hook/useInput';

function SomethingComponent() {
    const [value, OnChange] = useInput("");
    return (
        <>
	        <input type="text" onChange={OnChange}/>
	        <div>
		        {value}가 강해졌다 돌격해!
	        </div>
        </>
    )
}
export default SomethingComponent;