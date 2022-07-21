import { useDispatch } from 'react-redux';
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { INewsSlice } from '../../types/storeTypes'



type InitialStateType = {
  news: INewsSlice[],
  searchInput: string
  filterBy: string

}

const initialState: InitialStateType = {
  news: [],
  searchInput: '',
  filterBy: ''

}
export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, {payload}) => {
      state.news = payload
    },
    setSearchValue: (state, {payload}) => {
      state.searchInput = payload
    },
    setFilterKeyword: (state, {payload}) => {
      state.filterBy = payload
    }
  }

})



export const useNewsSliceActionCreators = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...newsSlice.actions,
    },
    dispatch,
  );
};
