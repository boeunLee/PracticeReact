import { useState } from 'react';

function useInput(initState) {
    const [value, setValue] = useState(initState);
    function OnChange(e) {
        setValue(e.target.value);
    }
    return [value, OnChange];
}

export default useInput;