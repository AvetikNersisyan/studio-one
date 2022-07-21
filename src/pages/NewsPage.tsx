import React, {  useEffect, useState } from 'react'

import {  Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


import { useGetNewsData } from '../hooks/useGetNewsData'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { NewsFeedItem } from '../components/newsItem/NewsFeedItem'
import { SIZES } from '../constants/theme'
import { useGetMemoizedFibNumbers } from '../hooks/useGetMemoizedFibNumbers'
import { AsyncRequestWrapper } from '../layouts/asyncRequestWrapper'
import { INewsSlice } from '../types/storeTypes'
import { SearchBar } from '../components/searchBar/SearchBar'
import { FILTER } from '../utils/helpers'


const NewsPage: React.FC = () => {
  const { fetch, status } = useGetNewsData()
  const news = useSelector((state: RootState) => state.news.news)
  const value = useSelector((state: RootState) => state.news.searchInput)

  const navigate = useNavigate()

  const [newsToRender, setNewsToRender] = useState<INewsSlice[]>(news)
  const filterBy = useSelector((state: RootState) => state.news.filterBy)

  const getItemKey = (item: INewsSlice, filterBy: string): string => {
    switch (filterBy) {
      case FILTER.TITLE:
        return item.title
      case FILTER.DESCRIPTION :
        return item.description
      case FILTER.AUTHOR:
        return item.author
      default:
        return item.title + item.author + item.description
    }
  }

  const filterData = (searchKey: string) => {
    const filteredData = news.filter(
      item => getItemKey(item, filterBy).
        toLowerCase().
        includes(searchKey.toLowerCase().trim()))

    setNewsToRender(filteredData)
  }

  useEffect(() => {
    let id = setTimeout(() => {
      filterData(value)
      navigate('/news')
    }, 400)

    return () => {
      clearTimeout(id)
    }
  }, [value])

  useEffect(() => {
    fetch()
  }, [])

  const { memoizedNumbers, memoizeFibNumbers } = useGetMemoizedFibNumbers()

  memoizeFibNumbers(news.length)

  return (
    <AsyncRequestWrapper status={status}>

      <>
        <SearchBar/>

        <Container style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: SIZES.gap * 3,
          justifyContent: 'center',

        }}>


          {
            newsToRender.length ? newsToRender.map((item, index) => (
                <NewsFeedItem fibNumber={memoizedNumbers[index + 1]}
                              key={item.url} {...item} />
              ))
              :
              <Typography>
                Nothing found
              </Typography>
          }
        </Container>


      </>

    </AsyncRequestWrapper>
  )
}

export default React.memo(NewsPage)
