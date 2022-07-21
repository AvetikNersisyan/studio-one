import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { newsSlice, useNewsSliceActionCreators } from './newsSlice'


interface IInitialState {
  name: string
  surname: string
  position: string,
  phone: string,
  about: string
  isAuth: boolean
}


const initialState = {
  name: 'Abba',
  surname: 'Faria',
  position: 'Priest',
  about: 'I am a good boy',
  phone: '+37400000000',
  email: 'admin',
  password: '12345',
  isAuth: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, { payload }) => {
      state.isAuth = payload
    }
  },
})

export const useUserSliceActionCreators = () => {
  const dispatch = useDispatch()

  return bindActionCreators(
    {
      ...userSlice.actions,
    },
    dispatch,
  )
}
