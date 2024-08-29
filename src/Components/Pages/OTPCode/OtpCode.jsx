import React, { useState } from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'

export default function OtpCode() {
    const [OtpCode, setOtpCode] = useState('')
    
  return (
    <div>
      <p>Un code vous a été sur votre e-mail ({localStorage.getItem('email')}). Veuillez le saisir</p>
      <form action="">
        <Input 
        type={'text'} 
        label={'OTP Code'} 
        value={OtpCode} 
        placeHolder={'Veuillez saisir le code...'} 
        reference={'otp'} 
        onChange={(e) => {setOtpCode(e.target.value)}}
        />
        <Button text={'soumettre'} type={'submit'}/>
      </form>
    </div>
  )
}
