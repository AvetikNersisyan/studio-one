import React, { useEffect } from 'react'
import './App.css'
import MainLayout from './layouts/mainLayout'
import AppRoutes from './routes'
import { useUserSliceActionCreators } from './store/slices/userSlice'


const App: React.FC = () => {
  const token = localStorage.getItem('token')
  const {setIsAuth} = useUserSliceActionCreators()

  useEffect( () => {
    if (token) {
      setIsAuth(true)
    }
  }, [token, setIsAuth])
  return (
    <MainLayout>
      <AppRoutes/>
    </MainLayout>
  );
}

export default App;
