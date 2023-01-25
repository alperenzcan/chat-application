import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Input from './Input'

const Login = () => {

  const [form, setForm] = useState({})

  const dispatch = useDispatch()
  const nav = useNavigate()

  const onChange = (e) => {
    const { value, name } = e.target
    setForm({ ...form, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className='login'>
      <div className='login__box'>
        <form onSubmit={onSubmit}>
          <h2 className='heading-secondary u-mb-3'>LOGIN</h2>
          <Input className='u-mb-1' type='text' placeholder='Your username*' name='username' onChange={onChange} />
          <Input className='u-mb-3' placeholder='Your password*' type='password' name='password' onChange={onChange} />
          <Button className='btn--light btn--animated' text='login' />
        </form>
      </div>
    </div>
  )
}

export default Login