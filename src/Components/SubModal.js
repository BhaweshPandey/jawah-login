import React from 'react'
import './Modal.css';
import click from '../image/notfound copy 2.jpg';
const SubModal = () => {
  return (
    <div className='Modal'>
      <div className='Modal-contant'>
        <div className='SubModal-header'>
          <img className='click-img' width='350px' height='200px' src={click} alt='' />
        </div>
        <div className='Modal-body'>
          <h3>Reset link has been sent to your Email</h3>
          <div className='SubModal-body-p'>
            <p>Please cliclk on the we've sent to your
            <br/>email to reset your current password</p>
          </div>
        </div>
        <div className='Modal-footer'>
          <button className='forgot-button'>ok, understood</button>
        </div>
      </div>
    </div>
  )
}

export default SubModal