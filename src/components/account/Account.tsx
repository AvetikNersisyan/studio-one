import { Box, Button, Container,  Typography } from '@mui/material'
import React from 'react'
import './account.css'
import { SIZES, TEXT_SIZE } from '../../constants/theme'
import { Icons } from '../../assets/svg'


interface IAccount {
  name: string,
  surname: string,
  position: string,
  phone: string,
  about: string,
  coverPhoto: string
  avatar: string,
  onLogout: () => void
}


export const Account: React.FC<IAccount> = ({
  coverPhoto,
  avatar,
  name,
  surname,
  phone,
  position,
  about,
  onLogout
}) => {

  return (
    <Box className={'card'}>
      <Box>
        <img alt={'Cover'} className={'cover'} src={coverPhoto}/>
      </Box>
      <img alt ={'Profile'} className={'avatar'} src={avatar}/>

      <Container style={{
        display: 'flex',
        justifyContent: "space-around",
        alignItems: "baseline",
        marginTop: -50
      }}>
        <Box className={'contactsWrapper'}>
          <Typography style={{
            fontSize: TEXT_SIZE.paragraph * 1.2,

          }}>
            {name} {surname}
          </Typography>
          <Typography style={{
            fontSize: TEXT_SIZE.paragraph * 0.8,
            fontWeight: '400',
          }}>
            {position}
          </Typography>

          <Box style={{
            marginTop: SIZES.margin,
            marginBottom: SIZES.margin,
            display: 'flex',
            gap: 8
          }}>
            <Box style={{
              // width: 36,
              // height: 36
            }}>
            <Icons.Phone/>

            </Box>
            <Typography style={{
              fontSize: TEXT_SIZE.paragraph
            }}>
              {phone}
            </Typography>
          </Box>

        </Box>

        <Typography>
          {about}
        </Typography>

      </Container>


      <Button onClick={onLogout} style={{
        float: 'right'
      }}> Logout </Button>

    </Box>
  )
}
