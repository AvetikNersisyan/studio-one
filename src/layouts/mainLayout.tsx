import React from 'react'
import { BottomNavigation, Box, Container } from '@mui/material'
import NavBar from '../navigation/navigation'
import Header from '../components/Header'
import { SIZES } from '../constants/theme'


interface IMainLayoutProps {
  children: JSX.Element
}


const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'row',
      position: 'relative'
    }}>
      <NavBar/>


      <Box style={{
        width: '100%',
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        padding: SIZES.padding1
      }}>
        <Header/>
        <Box>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default MainLayout
