import React from 'react'

export default function Input({placeholder, title, valor, setValor}) {
    const muda = (e) =>{
        setValor(e.target.value)
    }


  return (
    <div>
        <label>{title}</label>
        <input value={valor} type="text" placeholder={placeholder} onChange={(e) => muda(e)} />
    </div>
  )
}
