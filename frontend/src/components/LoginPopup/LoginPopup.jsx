//import React from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import PropTypes from 'prop-types'; // Import PropTypes

const LoginPopup = ({setShowLogin}) => {
   const [currState, setCurrState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form action="" className='login-popup-container'>
            <div className="login-popup-title">
                <h2>Sign Up</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState === "Login"?<></>:<input type='text' placeholder='Your name' required/>}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
 
            </div>
            {currState === "Login"
            ?<p>Create a new account? <span onClick={()=> setCurrState("Sign Up")}>Click here</span></p>
            :<p>Aldready have an account? <span onClick={()=> setCurrState("Login")}>Click here</span></p>
            }
            </form>
    </div>
  )
}

export default LoginPopup

// Add prop types validation
LoginPopup.propTypes = {
    setShowLogin: PropTypes.any.isRequired, // Assuming setCategory is a function
  };