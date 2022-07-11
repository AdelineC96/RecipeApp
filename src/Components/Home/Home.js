import React, { useEffect, useState, useCallback } from "react";
import "./Home.css";
import Meals from "../Meals/Meals";
import Search from "../SearchBar/Search";
import SidePanel from "../SidePanel/SidePanel";
import { categoryList } from "../data";
import { ratingList } from "../data";
import { dataList } from "../data";
import { SettingsApplicationsSharp } from "@mui/icons-material";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedRating, setSelectedRating] = useState();
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);
  const [inputSearch,setInputSearch]=useState('')
  const [Ascending,setAscending]=useState(false);
  const [Descending,setDescending]=useState(false);


  const [cuisines, setCuisines] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chinese",
    },
    {
      id: 3,
      checked: false,
      label: "Italian",
    },
  ]);

  const handleReset = () => {
    setSelectedRating(null);
    setSelectedCategory(null);
    setSelectedPrice([1000, 5000]);
    setAscending(false)
    setDescending(false)
    window.location.reload(false);
  };

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (e, price) => {
    setSelectedPrice(price);
  };

  const handleInputChange=(e)=>
  setInputSearch(e.target.value)


  const handleAscending=()=>{
   setAscending(true)
   setDescending(false)

  }

  const handleDescending=()=>{
    console.log('hi')
    setDescending(true)
    setAscending(false)
  }



  const applyFiilters = useCallback(() => {
    //Rating
    let updatedList = dataList;
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
      setList(updatedList);
    }

    //Category
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
      setList(updatedList);
    }

    //Price
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setList(updatedList);


    //Ascending

    if(Ascending){
        updatedList=updatedList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        setList(updatedList);       


        
        // setList(updatedList);
    
    }

    //Descending
    
    if(Descending){
        updatedList=  updatedList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        console.log('he')
        setList(updatedList);


    
    }

    //Cuisine
    const cuisineChecked = cuisines.filter((item) => item.checked).map((item)=>item.label.toLowerCase())

    if (cuisineChecked.length){
        updatedList=updatedList.filter((item)=>cuisineChecked.includes(item.cuisine))
        setList(updatedList)
    }

    //Search 

    if(inputSearch){
        updatedList=updatedList.filter(item=>item.title.toLowerCase().search(inputSearch.toLowerCase().trim())!==-1)
        setList(updatedList)

    }
    ;
  }, [selectedRating, selectedCategory, selectedPrice,cuisines,inputSearch,Ascending,Descending]);

  useEffect(() => {
    applyFiilters();
  }, [applyFiilters]);

  return (
    <div className="Home">
      <Search value={inputSearch} onChange={handleInputChange} />
      <div className="homePanelList">
        <div className="homePanelWrap">
          <SidePanel
            cuisines={cuisines}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            ratingList={ratingList}
            changeChecked={handleChangeChecked}
            categoryList={categoryList}
            selectedPrice={selectedPrice}
            changedPrice={handleChangePrice}
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            resetAll={handleReset}
            sortAscending={handleAscending}
            sortDescending={handleDescending}
          />
        </div>
        <div className="homeListWrap">
          <Meals list={list} />
        </div>
      </div>
    </div>
  );
};

export default Home;
