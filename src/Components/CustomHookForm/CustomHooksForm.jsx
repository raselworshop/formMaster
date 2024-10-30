import useInputState from "../../Hooks/useInputState";

const CustomHooksForm = () => {
    // const [name, handlenameChange] = useInputState('rasel');
    const emailState = useInputState('rmdj@gmail.com');
    const handleSubmit = e =>{
        console.log('form data', emailState.values)
        // console.log('form data', name)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handlenameChange} type="text" name="name"/><br /> */}
                <input {...emailState} type="email" name="email" id="" /><br />
                <input type="password" name="password" id="" /><br />
                <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default CustomHooksForm;