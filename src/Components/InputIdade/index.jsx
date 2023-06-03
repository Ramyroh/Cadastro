import React from 'react'
import './style.css'

export default function InputIdade({ idade }) {
  return (
    <div className='containerInputIdade'>
        <label htmlFor="idade">{idade}</label>
        <input type="number" id='idade' />
    </div>
  )
}
