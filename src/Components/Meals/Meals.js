import React from 'react'
import Card from '../MealCard/Card'
import './Meals.css'

const Meals = ({list}) => {
  return (
    <div className='list-container'>
      {list.map(item=><Card key={item.id} item={item}/>)}
    </div>
  )
}

export default Meals