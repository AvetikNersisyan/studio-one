import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Login } from '../components/login/Login'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Navigate, useNavigate } from 'react-router-dom'
import { useUserSliceActionCreators } from '../store/slices/userSlice'


const ERROR_MESSAGE = 'The username or password you entered is incorrect'

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)


  const { email, password, isAuth } = useSelector((state: RootState) => state.userInfo)
const {setIsAuth} = useUserSliceActionCreators()

  const isValid = (): boolean => {
    return email === userName && password === pass
  }

  useEffect(() => {
    if(isAuth) {
      navigate('/profile')
    }
  },[isAuth])

  const handleSubmit = () => {
    if ( isValid()) {
      localStorage.setItem('token', '1')
      setIsAuth(true)
      navigate('/profile')
    } else {
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      }, 1300)
    }
  }

  return (
    <Container style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <Login errorMessage={ERROR_MESSAGE}
             isError={isError}
             onSubmit={handleSubmit}
             userName={userName}
             password={pass}
             setUserName={setUserName}
             setPassword={setPass}/>
    </Container>
  )
}
