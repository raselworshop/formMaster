
const ReusableForm = ({formTitle, handleSubmit, submitBtnTxt='Submit', children}) => {
    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name:e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }
    return (
        <div>
            {/* <h2>{formTitle}</h2> insted use next one */}
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name"/><br />
                <input type="email" name="email" id="" /><br />
                <input type="password" name="password" id="" /><br />
                <input type="submit" value={submitBtnTxt} />
            </form>
        </div>
    );
};

// propvalidation latter

export default ReusableForm;