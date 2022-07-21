import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { Account } from '../components/account/Account'
import coverPhoto from '../assets/img/user/cover.png'
import avatar from '../assets/img/user/profile.png'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useNavigate } from 'react-router-dom'
import { useUserSliceActionCreators } from '../store/slices/userSlice'


export const ProfilePage: React.FC = () => {
const navigate = useNavigate()
  const isAuth = useSelector((state: RootState) => state.userInfo.isAuth)
  const userInfo = useSelector((state: RootState) => state.userInfo)

  const {setIsAuth} = useUserSliceActionCreators()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [])


  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    setIsAuth(false)
  }

  return (
    <Container>
      <Account onLogout={handleLogout} avatar={avatar} coverPhoto={coverPhoto} {...userInfo}/>

    </Container>
  )
}
