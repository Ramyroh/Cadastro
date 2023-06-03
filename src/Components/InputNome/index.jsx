import React from 'react'
import './style.css'

export default function InputNome({nome}) {
  return (
    <div className='containerInputNome'>
        <label htmlFor="nome" className='nome'>{nome}:</label>
        <input type="text" id='nome' />
    </div>
    
  )
}
