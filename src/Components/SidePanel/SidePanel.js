import { Checkbox } from "@mui/material";
import React from "react";
import FilterListToggle from "../FilterListToggle/FilterListToggle";
import "./SidePanel.css";
import CheckboxComp from "../CheckboxComp/Checkbox";
import PriceSlider from "../PriceSlider/PriceSlider";
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

const SidePanel = ({
  
  cuisines,
  ratingList,
  selectRating,
  selectedRating,
  categoryList,
  selectedCategory,
  selectToggle,
  changeChecked,
  selectedPrice,
  changedPrice,
  resetAll,
  sortAscending,
  sortDescending
}) => {
  return (
    <div>
      {/*category */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/*Cusines*/}
      <div className="input-group">
        <p className="label">Cuisine</p>
        {console.log(cuisines)}
        {cuisines.map((cuisine) => (
          <CheckboxComp
            label={cuisine.label}
            changeChecked={changeChecked}

            cuisine={cuisine}
            key={cuisine.id}
          />

        ))}
      </div>
      <ToggleButtonGroup sx={{margin:'4px'}}>
        <ToggleButton className='sort-button' onClick={sortAscending} >Sort by Ascending Price </ToggleButton>
        <ToggleButton className='sort-button' onClick={sortDescending} >Sort by Descending Price </ToggleButton>

      </ToggleButtonGroup>
      {/*Price Range */}
      <div className="input-group">
      <p className="label">Price Range</p>
      <PriceSlider value={selectedPrice} changedPrice={changedPrice} />

      </div>
      {/*Star rating */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      
        <ToggleButton className='resetBtn' sx={{width:'100%', marginTop:'20px', backgroundColor:'#2596be', color:'white'}} onClick={resetAll}>Reset</ToggleButton>
      </div>
    </div>
  );
};

export default SidePanel;
