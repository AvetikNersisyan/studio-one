import { Box, Container } from '@mui/material'
import React, { memo, useEffect } from 'react'
import { useGetNewsData } from '../hooks/useGetNewsData'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { NewsFeedItem } from '../components/newsItem/NewsFeedItem'
import { SIZES } from '../constants/theme'
import { useGetMemoizedFibNumbers } from '../hooks/useGetMemoizedFibNumbers'
import { AsyncRequestWrapper } from '../layouts/asyncRequestWrapper'


const NewsPage: React.FC = () => {
  const { fetch, status } = useGetNewsData()
  const news = useSelector((state: RootState) => state.news.news)


  useEffect(() => {
    fetch()
  }, [])

  const { memoizedNumbers, memoizeFibNumbers } = useGetMemoizedFibNumbers()

  memoizeFibNumbers(news.length)

  return (
    <AsyncRequestWrapper status={status}>

      <Container style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: SIZES.gap * 3,
        justifyContent: 'center',

      }}>


        {
          news.map((item, index) => (
            <NewsFeedItem fibNumber={memoizedNumbers[index + 1]}
                          key={item.url} {...item} />
          ))
        }
      </Container>

    </AsyncRequestWrapper>

  )
}

export default React.memo(NewsPage)
