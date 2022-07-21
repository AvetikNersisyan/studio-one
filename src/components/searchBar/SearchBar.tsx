import {
  Box,
  FormControl,
  InputBase,
  InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material'

import { useSelector } from 'react-redux'
import { Search } from '@mui/icons-material'

import { SIZES } from '../../constants/theme'
import React from 'react'
import { FILTER } from '../../utils/helpers'
import { useNewsSliceActionCreators } from '../../store/slices/newsSlice'
import { RootState } from '../../store/store'
import './index.css'


export const SearchBar: React.FC = () => {

  const { setSearchValue: setValue } = useNewsSliceActionCreators()
  const value = useSelector((state: RootState) => state.news.searchInput)

  const { setFilterKeyword: setFilterBy } = useNewsSliceActionCreators()
  const filterBy = useSelector((state: RootState) => state.news.filterBy)

  const handleChange = (event: SelectChangeEvent) => {
    setFilterBy(event.target.value)
  }

  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      position: 'fixed',
    }}>


      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="filterby">Filter by</InputLabel>
        <Select
          labelId="filterby"
          id="filter-by"
          value={filterBy}
          onChange={handleChange}
          label="filter"
        >

          <MenuItem value={FILTER.TITLE}>Title</MenuItem>
          <MenuItem value={FILTER.AUTHOR}>Author</MenuItem>
          <MenuItem value={FILTER.DESCRIPTION}>Description</MenuItem>
        </Select>
      </FormControl>


      <label style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

      }}>


        <Box style={{
          // position: 'absolute',
          top: SIZES.gap * 1.5,
          // marginLeft: -36,
          cursor: 'pointer',
          width: SIZES.gap * 4,
          // zIndex: 2,
          height: '80%',

        }}>
          <Search/>
        </Box>

        <InputBase value={value}
                   onChange={(e) => setValue(e.target.value)}
                   placeholder={'Search...'}/>
      </label>

    </Box>

  )
}
