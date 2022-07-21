import {
  Box, Button,
TextField,
} from '@mui/material'
import React from 'react'
import { SIZES } from '../../constants/theme'


interface ILogin {
  userName: string
  password: string,
  setPassword: (val: string) => void
  setUserName: (val: string) => void
  onSubmit: () => void
  isError: boolean
  errorMessage: string
}


export const Login: React.FC<ILogin> = ({
  setPassword, password, setUserName, userName,
  onSubmit, isError, errorMessage
}) => {

  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      gap: SIZES.gap * 3,
      width: '30vw',
      justifyContent: 'center',

    }}>


      <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: SIZES.gap * 4,
        width: '30vw',
        justifyContent: 'center',
      }} onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}>

        <TextField placeholder={'email'}

                   value={userName}
                   onChange={(e) => setUserName(e.target.value)} id="e-mail"/>

        <TextField placeholder={'email'}
                   helperText={isError && errorMessage}
                   error={isError}
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} id="password"/>


        <Button  type={'submit'} onSubmit={(e) => {
          e.preventDefault()
        }}
                variant={'contained'}>
          Login
        </Button>


      </form>


    </Box>
  )
}
