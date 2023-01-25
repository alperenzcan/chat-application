import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAction } from '../redux/feature/userSlice'
import Button from './Button'
import Input from './Input'

const Login = () => {

  const [username, setUsername] = useState('')

  const dispatch = useDispatch()
  const nav = useNavigate()

  const onClickLogin = () => {
    if (username !== '') {
      dispatch(loginAction(username))
      nav('/chat')
    }
  }

  return (
    <div className='login'>
      <div className='login__box'>
        <div>
          <h2 className='heading-secondary'>LOGIN</h2>
          <Input />
        </div>
      </div>
    </div>
  )
}

export default Login