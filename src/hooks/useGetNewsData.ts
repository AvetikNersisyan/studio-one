import axios from 'axios'
import { API_KEY, API_STATUS, API_URL } from '../api/api'
import { useNewsSliceActionCreators } from '../store/slices/newsSlice'
import { useCallback, useState } from 'react'


export const useGetNewsData = () => {

const {setNews} = useNewsSliceActionCreators()
  const [status, setStatus] = useState(API_STATUS.INITIAL)

  const fetch = useCallback(() => {
    setStatus(API_STATUS.LOADING)
    axios.get(`${API_URL}?country=us&apiKey=${API_KEY}`).then(r =>{
      console.log(r, 'response')
      setNews(r.data.articles)
  })

}, [])

  return {fetch, status}

}
