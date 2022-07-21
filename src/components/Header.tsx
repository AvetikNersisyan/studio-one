import React from 'react'
import { Box } from '@mui/material'
import { COLORS, SIZES } from '../constants/theme'


const Header: React.FC = () => {

  return (

    <Box style={{
      height: SIZES.margin * 8,
      width: '100%',
      marginLeft: -8,
      position: 'fixed',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: COLORS.lightGray,
      gap: SIZES.gap * 6,
      zIndex: 100,
    }}>

    </Box>
  )
}

export default Header
