import lounge from './pictures/lounge.jpg'
import burger from './pictures/burger.jpg'
import chow from './pictures/chow.jpg'
import dimsums from './pictures/dimsums.jpg'
import italian from './pictures/italian.jpg'
import noodles from './pictures/noodles.jfif'
import pesto from './pictures/pesto.jfif'
import risotto from './pictures/risotto.jfif'
import seafood from './pictures/seafood.jfif'
import shitake from './pictures/shitake.jpg'
import urban from './pictures/urban.jpg'
import bruschetta from './pictures/bruschetta.jpg'


export const categoryList = [
    {
      id: 1,
      value: 'place',
      label: '🚩 Places',
    },
    {
      id: 2,
      value: 'dish',
      label: '🍕 Dishes',
    },
  ];

  
  export const ratingList = [
    {
      id: 1,
      value: '1',
      label: '1🌟',
    },
    {
      id: 2,
      value: '2',
      label: '2🌟',
    },
    {
      id: 3,
      value: '3',
      label: '3🌟',
    },
    {
      id: 4,
      value: '4',
      label: '4🌟',
    },
    {
      id: 5,
      value: '5',
      label: '5🌟',
    },
  ];
  
  export const dataList = [
    {
      id: 1,
      title: 'lounge resort',
      serviceTime: '45-60min',
      deliveryFee: 3.44,
      category: 'place',
      cuisine: 'american',
      rating: 5,
      price: 2500,
      coverSrc: lounge
    },
    {
      id: 2,
      title: 'door urban',
      serviceTime: '15-20min',
      deliveryFee: 4.94,
      category: 'place',
      cuisine: 'italian',
      rating: 4,
      price: 1000,
      coverSrc: urban
    },
    {
      id: 3,
      title: 'chow',
      serviceTime: '30-22min',
      deliveryFee: 4.94,
      category: 'place',
      cuisine: 'chinese',
      rating: 3,
      price: 2000,
      coverSrc: chow
    },
    {
      id: 4,
      title: 'wharf seafood',
      serviceTime: '10-18min',
      deliveryFee: 2.14,
      category: 'place',
      cuisine: 'american',
      rating: 1,
      price: 1800,
      coverSrc: seafood
    },
    {
      id: 5,
      title: 'Tossin',
      serviceTime: '25-30min',
      deliveryFee: 6.79,
      category: 'place',
      cuisine: 'italian',
      rating: 5,
      price: 2000,
      coverSrc: italian
    },
    {
      id: 6,
      title: 'stories noodles',
      serviceTime: '5-15min',
      deliveryFee: 2.87,
      category: 'place',
      cuisine: 'chinese',
      rating: 5,
      price: 3500,
      coverSrc: noodles
    },
    {
      id: 7,
      title: 'Nacho cheeseburger',
      serviceTime: '50-65min',
      deliveryFee: 8.5,
      category: 'dish',
      cuisine: 'american',
      rating: 2,
      price: 2200,
      coverSrc: burger
    },
    {
      id: 8,
      title: 'Mushroom Risotto',
      serviceTime: '10-15min',
      deliveryFee: 1.8,
      category: 'dish',
      cuisine: 'italian',
      rating: 1,
      price: 1900,
      coverSrc:risotto
    },
    {
      id: 9,
      title: 'Shitake Fried Rice',
      serviceTime: '12-18min',
      deliveryFee: 3.33,
      category: 'dish',
      cuisine: 'chinese',
      rating: 4,
      price: 2750,
      coverSrc: shitake
    },
    {
      id: 10,
      title: 'Pesto chicken stew',
      serviceTime: '30-38min',
      deliveryFee: 1.9,
      category: 'dish',
      cuisine: 'american',
      rating: 2,
      price: 4350,
      coverSrc:pesto
    },
    {
      id: 11,
      title: 'Bruschetta',
      serviceTime: '16-20min',
      deliveryFee: 4.1,
      category: 'dish',
      cuisine: 'italian',
      rating: 3,
      price: 3300,
      coverSrc: bruschetta
    },
    {
      id: 12,
      title: 'Dim Sums',
      serviceTime: '24-30min',
      deliveryFee: 1.5,
      category: 'dish',
      cuisine: 'chinese',
      rating: 2,
      price: 4100,
      coverSrc: dimsums
    },
  ];