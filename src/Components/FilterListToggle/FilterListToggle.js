import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import './FilterListToggle.css'


const FilterListToggle = ({options,value,selectToggle,selectRating}) => {
    
    return (
    <ToggleButtonGroup
    value={value}
      exclusive
      onChange={selectToggle}
    className='toggleButtonGroup'>

    { options.map(({label,id,value})=><ToggleButton sx={{margin:'5px',width:'100%', height:'50px'}} color='secondary' key={id} value={value} className='toggle'>{label}</ToggleButton>)} 
    </ToggleButtonGroup>
  )
}

export default FilterListToggle