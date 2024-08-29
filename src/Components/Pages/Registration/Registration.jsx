import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import Alert from '../../Alert/Alert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [error, setError] = useState(false)
    const navigate = useNavigate()
    
    const [errorText, setErrorText] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(false)
        setErrorText("")
        if (email.trim().length < 6 || email.trim().length >= 32 ) {
            setError(true)
            const errorMessage = "L'e-mail doit être compris entre 6 et 32 caractères"
            setErrorText(errorMessage)
            toast.error(errorMessage)
            return
        }

        if (password.trim().length < 6 || password.trim().length >= 32) {
            setError(true)
            const errorMessage = "Le mot de passe doit être compris entre 6 et 32 caractères"
            toast.error(errorMessage)
            return
        }
        if (passwordConfirm !== password.trim()) {
            setError(true)
            const errorMessage = "Les deux mots de passe ne correspondent pas"
            toast.error(errorMessage)
            return
        }

        localStorage.setItem("email", email)

        navigate("/otp-code") 
    }
    
  return (

    <div>
        <ToastContainer stacked/>
    <h1>Inscription</h1>
    <form onSubmit={handleSubmit}>
      <p>Renseigner vos informations pour vous inscrire</p>
      {error && <Alert text={errorText}/>}
      <Input
      label={'Email'}
      reference={'email'} 
      type={'text'} 
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
      <Input 
      label={'Confirmation de votre mot de passe'}
      reference={'passwordConfirm'} 
      type={'password'} 
      value={passwordConfirm} 
      placeHolder={'Confirmer votre mot de passe ici... '} 
      onChange={ (e) => {
        setPasswordConfirm(e.target.value)
      }} 
      /><br/>
      <div>
        <Button type={'submit'} text={'Soumettre'} /><br/>
        <Button type={'reset'} text={'Annuler'} />
      </div>
      <Link to={'/'} >Connexion</Link>
    </form>

      
    </div>
  )
}
