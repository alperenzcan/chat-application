import React from 'react'

const Input = (props) => {
  const { type, placeholder, onChange, label } = props
  return (
    <div className='input'>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default Input