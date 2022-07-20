import React from 'react'
import { Box, CircularProgress, Container } from '@mui/material'
import { API_STATUS } from '../api/api'


interface IAsyncRequestWrapper {
  children?: React.ReactElement
  status: number | string
}


export const AsyncRequestWrapper: React.FC<IAsyncRequestWrapper> = ({
  children,
  status,
}) => {

  if (status === API_STATUS.LOADING) {
    return (
      <Container style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} >
        <CircularProgress/>
      </Container>
    )
  }

  return (
    <Box>
      {children}
    </Box>
  )

}
