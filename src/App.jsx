
import './App.css'
import GrandPa from './Components/GrandPa/GrandPa'
import ReusableForm from './Components/ReusableComponent/ReusableForm'
// import CustomHooksForm from './Components/CustomHookForm/CustomHooksForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateFullForm from './Components/StateFullForm/StateFullForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('Sign up data', data)
  }
  const handleProfileUpdateSubmit = data => {
    console.log('Update profile data', data)
  }

  return (
    <>

      <h1>Form Master</h1>
      <GrandPa></GrandPa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHooksForm></CustomHooksForm> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h3>Sign Up</h3>
          <p>Please Sign Up Right Now!!</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleProfileUpdateSubmit} submitBtnTxt={'Update'}>
        <div>
          <h3>Profile Update</h3>
          <p>Please Keep your profile up to date!!</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
