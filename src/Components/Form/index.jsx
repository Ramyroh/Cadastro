import React from 'react'
import ButtonSub from '../ButtonSub'
import InputEmail from '../InputEmail'
import InputIdade from '../InputIdade'
import InputNome from '../InputNome'
import InputSobrenome from '../InputSobrenome'
import './style.css'

export default function Form() {
    return (
        <div className='containerForm'>
            <div>
                <InputNome nome="Nome" />
                <InputSobrenome sobrenome='Sobrenome:' />
                <InputIdade idade='idade:' />
                <InputEmail email='E-mail:' />
                <ButtonSub />
            </div>

            <hr />
        </div>
    )
}
