import React from 'react'
import './style.css'

export default function ButtonSub({submit}) {
  return (
    <div className='containerButton'>
        <button className='buttonSub' onClick={submit}>Enviar</button>
    </div>
  )
}
