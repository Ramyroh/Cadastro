import React from 'react'
import './style.css'

export default function InputEmail({ email }) {
  return (
    <div className='containerInputEmail'>
        <label htmlFor="email" className='textEmail'>{email}</label>
        <input type="email" id='email' />
    </div>
  )
}
