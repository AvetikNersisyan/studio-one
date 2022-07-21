import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { INewsSlice } from '../../types/storeTypes'
import { useDispatch } from 'react-redux';



type InitialStateType = {
  news: INewsSlice[]

}

const initialState: InitialStateType = {
  news: [],

}
export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, {payload}) => {
      state.news = payload
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
