import React from 'react'
import './style.css'
export default function Cadastrado() {
    
    const cadastrados = ['nome', 'sobrenome', 'idade', 'e-mail']
    const listaCadastrados = cadastrados.map(
        (c) => <p>{c}</p>
    )

    return (
    <div className='containerCadastrado'>
        {listaCadastrados}
    </div>
  )
}
