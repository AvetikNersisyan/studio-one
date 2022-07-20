import { Box, MenuItem, MenuList, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IRoutes, routes } from '../routes/routes'
import { NavLink } from 'react-router-dom'
import { COLORS, SIZES } from '../constants/theme'



const NavBar: React.FC = () => {

  const [menuItems, setMenuItems] = useState<IRoutes[]>(routes)

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
    <Box style={{
      backgroundColor: '#f1f6fa',
    }}>

      <MenuList>
        {menuItems.map(route => {
          if (route.isShowMenu) {
            return <MenuItem>
              <NavLink onClick={() => handleItemSelect(route.path)} style={{
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
                  <Typography>
                    {route.label}
                  </Typography>
                </Box>
              </NavLink>
            </MenuItem>
          }
        })}

      </MenuList>

    </Box>
  )
}

export default NavBar
