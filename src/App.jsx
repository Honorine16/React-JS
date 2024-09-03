import React, { useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'

export default function App() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const navigate = useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault();
    const fromData = new FormData();
    fromData.set("email", email);
    fromData.set("password", password);
    setIsLoading(true)
    

    const response = await axios.post('http://127.0.0.1:8000/api/v1.0.0/login', fromData);

    if (response.data.success){
      toast.success(response.data.message)
      setIsLoading(false)
      setTimeout(function(){
        navigate('/dashboard')
      }, 3000)
    }else{
      console.log(response.data);
      toast.error("email ou mot de passe incorrect");
      setIsLoading(false);
    }
  };

  
  return (
 
  <div>
    <ToastContainer/>
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
        <Button disabled={isLoading} type={'submit'} text={isLoading ? 'Chargement ...' : 'Soumettre'} /><br/>
        <Button type={'reset'} text={'Annuler'} />
      </div>
      <Link to={'/registration'} >Inscription</Link>
    </form>
  </div>
  
)}
