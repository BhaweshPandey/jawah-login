import React from 'react';
import './Pages.css';
import Modal from '../Components/Modal';

const Login = () => {
const [show, setShow]=React.useState(false);
  return (
    <div className='container'>
        <div className='top'>
            <h2>Log in your account</h2>
            <p>Please log in to use our vendor portal</p>
        </div>
        <div className='mid'>
            <label>Email</label>
            <input type="text" placeholder="Email" />
        </div>
        <div className='mid'>
            <label>Password</label>
            <input type="password" placeholder="Password" />
        </div>
        <div className='bottom'>
        <button >Save Changes</button>
        <a className='Forgot-button' onClick={() => setShow(true)} >Forgot your password?</a>
        <Modal show={show} onClose={()=> setShow(false)} />
        </div>
    </div>
  )
}

export default Login