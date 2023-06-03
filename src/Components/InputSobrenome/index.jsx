import React from 'react'
import './style.css'

export default function InputSobrenome({sobrenome}) {
  return (
    <div className='containerInputSobrenome'>
        <label htmlFor="sobrenome">{sobrenome}</label>
        <input type="text" id='sobrenome' />
    </div>
  )
}
