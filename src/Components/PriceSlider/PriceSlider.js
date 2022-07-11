import { Slider } from '@mui/material'
import React from 'react'

const PriceSlider = ({value,changedPrice}) => {
  return (
    <div>
        <Slider
        value={value}
        sx={{width:'100%'}}
        onChange={changedPrice}
        valueLabelDisplay='on'
        min={1000}
        max={5000}
        />
    </div>
  )
}

export default PriceSlider