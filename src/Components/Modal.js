import React  from 'react'
import './Modal.css'
import close from '../image/Path.png'
import SubModal from '../Components/SubModal'

const Modal = ({show , onClose}) => {
  if(!show){
    return null;
}
  return (
    <div className='Modal'>
      <div className='Modal-contant'>
        <div className='Modal-header'>
          <h3 className='Modal-title'>Forgot password</h3>
          <img onClick={onClose} className='forgot-close' width='15px' height='23px' src={close} alt='' />
        </div>
        <div className='Modal-body'>
          <div>
            <p>Please let us know you Email below for us to send
            <br/> reset link on your website.</p>
          </div>
          <form>
            <label className='forgot-label'>Email address</label>
            <input className='forgot-input' type='text' ></input>
          </form>
        </div>
        <div className='Modal-footer'>
          <button className='forgot-button'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Modal