import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'

const Search = ({value,onChange}) => {
  return (
    <div className='search'>
      <SearchIcon className='searchIcon'/>
      <input type='text' placeholder='Search for place...' value={value} onChange={onChange} />
      
    </div>
  )
}

export default Search