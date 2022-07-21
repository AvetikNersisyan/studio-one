import React from 'react'
import { routes } from './routes'
import { Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'



const AppRoutes: React.FC = () => {

const isAuth = useSelector((state: RootState) => state.userInfo.isAuth)

  return (
    <Routes>
     {
      routes.map(route => {

       return <Route element={route.component} path={route.path} key={route.path} />
      })
     }
    </Routes>
  )

}

export default AppRoutes
