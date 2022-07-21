import React from 'react'
import {  routes } from './routes'
import { Routes, Route } from 'react-router-dom'



const AppRoutes: React.FC = () => {

  return (
    <Routes>
      {
        routes.map(route => {

          return <Route element={route.component}
                        path={route.path}
                        key={route.path}/>
        })
      }
    </Routes>
  )

}

export default AppRoutes
