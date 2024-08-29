import React from 'react'
import './Button.css'

export default function Button({text, onClick, type}) {
  return (
    <div>
      <button className='button' type={type}  onClick={onClick} >{text || "Opérations"} </button>
    </div>
  )
}
