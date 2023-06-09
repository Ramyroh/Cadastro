import React from 'react'
import { useState } from 'react'
import ButtonSub from '../ButtonSub'
import Cadastrado from '../Cadastrado'
import Input from '../Input'
import InputEmail from '../InputEmail'
import InputIdade from '../InputIdade'
import InputNome from '../InputNome'
import InputSobrenome from '../InputSobrenome'
import './style.css'

export default function Form() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')

    const handdleClick = () => {
        const Data = {
            nome,
            sobrenome: '',
            idade:'',
            email:''
        }

        console.log(Data);
    }

    return (
        <div className='containerForm'>
            <div className='ContainerMain1'>
                <Input 
                title='Nome'
                placeholder='digite seu nome' 
                valor={nome}
                setValor={setNome}
                />

                <Input 
                title='Sobrenome'
                placeholder='digite seu sobrenome' 
                valor={sobrenome}
                setValor={() => setSobrenome()}
                />

                <Input 
                title='Idade'
                placeholder='digite sua idade' 
                valor={idade}
                setValor={() =>setIdade()}
                />

                <Input 
                title='E-mail'
                placeholder='email@exemplo.com' 
                valor={email}
                setValor={() =>setEmail()}             
                />

                <ButtonSub submit={handdleClick}/>
            </div>
            <hr />
            <div className='ContainerMain2'>
                <Cadastrado />
            </div>
        </div>
    )
}
