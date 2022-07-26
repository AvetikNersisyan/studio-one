import React, {  useState } from 'react'

import {
  Box,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material'
import { NavLink } from 'react-router-dom'


import { IRoutes, routes } from '../routes/routes'
import { COLORS, SIZES } from '../constants/theme'

import './navigation.css'


const NavBar: React.FC = () => {

  const [menuItems, setMenuItems] = useState<IRoutes[]>(routes)
  const [isHover, setIsHover] = useState<boolean>(false)

  const handleMouseEnter = (): void => {
    setIsHover(true)
  }

  const handleMouseLeave = (): void => {
    setIsHover(false)
  }

  const handleItemSelect = (path: string): void => {
    const items: IRoutes[] = routes.map(route => {
      if (route.path === path) {
        route.fillColor = COLORS.blue
      } else {
        route.fillColor = COLORS.black
      }

      return route
    })
    setMenuItems(items)
  }

  return (

      <Box
        className={'menuBar'}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <Box>


        <MenuList>
          {menuItems.map(route => {
            if (route.isShowMenu) {
              return <MenuItem onClick={() => handleItemSelect(route.path)}  key={route.path}>
                <NavLink style={{
                  textDecoration: 'none',
                  color: COLORS.black,
                }}
                         to={route.path}
                >
                  <Box style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: SIZES.gap,
                  }}>
                    {route.icon && <route.icon fillColor={route.fillColor}/>}
                    {isHover && <Typography>
                      {route.label}
                    </Typography>}
                  </Box>
                </NavLink>
              </MenuItem>
            }
            else return null
          })}

        </MenuList>

      </Box>
    </Box>
  )
}

export default NavBar
