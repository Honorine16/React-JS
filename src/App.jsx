import React, { useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function App() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault();
    const fromData = new FormData();
    fromData.set("email", email);
    fromData.set("password", password);
    

    const response = await axios.post('http://127.0.0.1:8000/api/v1.0.0/login', fromData);

    if (response.data.success){
      toast.success(response.data.message)
      setTimeout(function(){
        navigate('/dashboard')
      }, 3000)
    }else{

      toast.error(response.data.message);

      
    }
  };

  
  return (
 
  <div>
    <h1>Connexion</h1>
    <form onSubmit={handleSubmit}>
      <p>Renseigner vos informations de connexion pour vous connectez</p>
      <Input
      label={'Email'}
      reference={'email'} 
      type={'email'} 
      value={email} 
      placeHolder={'Saisir l\'adresse e-mail ici... '} 
      onChange={ (e) => {
        setEmail(e.target.value)
      }} 
      /><br/>
      <div>{email}</div>
      <Input 
      label={'Mot de passe'}
      reference={'password'} 
      type={'password'} 
      value={password} 
      placeHolder={'Saisir le mot de passe ici... '} 
      onChange={ (e) => {
        setPassword(e.target.value)
      }} 
      /><br/>
      <div>
        <Button type={'submit'} text={'Soumettre'} /><br/>
        <Button type={'reset'} text={'Annuler'} />
      </div>
      <Link to={'/registration'} >Inscription</Link>
    </form>
  </div>
  
)}
