import { useState } from "react"

const useInputState = (defaultValue = null) =>{
    const [values, setValues] = useState(defaultValue);

    const onChange = e =>{
        setValues(e.target.value)
    }
    // const handleChange = e =>{
    //     setValues(e.target.value)
    // }
    // return [values, handleChange]
    return {
        values,
        onChange,
    }
}

export default useInputState;