import { useState } from "react";

const StateFullForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null);
    const [password, setPassword]= useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('password must be 6 or longer!!')
        }else{
            setError('')
        console.log(name, email, password)
        }
    }

    const handleNameChange = e =>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleEmailChange = e =>{
        console.log(e.target.value)
        const values = e.target.value;
        setEmail(values)
    }
    const handlePasswordChange = e =>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}
                 type="text" name="name"/><br />
                <input onChange={handleEmailChange}
                 type="email" name="email" id="" /><br />
                <input type="text" name="phone" id="" /><br />
                <input onChange={handlePasswordChange}
                type="password" name="password" id="" required/><br />
                <input type="submit" value='submit' />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;