import { Box, Typography } from '@mui/material'
import { INewsSlice } from '../../types/storeTypes'
import React from 'react'
import './newsItem.css'
import { COLORS, SIZES, TEXT_SIZE } from '../../constants/theme'
import { isPrime, normalizeDate } from '../../utils/helpers'


interface INewsFeedItem extends INewsSlice {
  fibNumber: number
}


const NewsFeedItem: React.FC<INewsFeedItem> = ({
  content,
  url,
  author,
  source,
  title,
  publishedAt,
  description,
  urlToImage,
  fibNumber,
}) => {

  const { date, time } = normalizeDate(publishedAt)

  return (
    <Box className={'container'}>
      <Box className={'title'}>
        <Typography style={{
          fontSize: TEXT_SIZE.h3 * 1.3,
          lineHeight: SIZES.margin / 7,
        }}>
          {title}
        </Typography>
      </Box>


      <img style={{
        width: '100%',
        objectFit: 'contain',
      }} src={urlToImage}/>

      <Typography style={{
        fontSize: TEXT_SIZE.paragraph * 0.8,
        color: COLORS.white,
      }}>

        Published at: {date} {time} by {author}

      </Typography>


      <Box className={'description'}>
        <Typography style={{
          fontSize: TEXT_SIZE.paragraph,
          lineHeight: SIZES.margin / 7,
        }}>
          {description}
        </Typography>
      </Box>


      <Box className={'fibonacci'}>
        <Typography style={{
          fontSize: TEXT_SIZE.paragraph,
          lineHeight: SIZES.margin / 6,
        }}>
          Fibonacci number for this post is: {fibNumber} ( {isPrime(fibNumber) ? "Prime": "Not Prime"} )
        </Typography>
      </Box>


    </Box>
  )
}

export { NewsFeedItem }
