import { Box, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useGetNewsData } from '../hooks/useGetNewsData'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { NewsFeedItem } from '../components/newsItem/NewsFeedItem'
import { SIZES } from '../constants/theme'


export const NewsPage: React.FC = () => {
  const { fetch } = useGetNewsData()
  const news = useSelector((state: RootState) => state.news.news)

  console.log(news, 'news')

  useEffect(() => {
    fetch()
  }, [])

  return (
    <Container style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: SIZES.gap * 3,
      justifyContent: 'center',

    }}>
      {
        news.map((item) => (
          <NewsFeedItem key={item.url} {...item} />
        ))
      }
    </Container>
  )
}
