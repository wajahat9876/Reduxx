import React from 'react'
import './Rightside.css'
import { Rating } from '@mui/material'
import getSymbolFromCurrency from 'currency-symbol-map'
export default function Product(props) {
  return (
    <div className='product'>
      <div className='productimg'><img src={props.def.img}  height='220px'></img></div>
      <div className='productname'>{props.def.name}</div>
      <div className='productrating'>{props.def.rating}
      <Rating name="productrating" value='4' style={{fontSize:'18px'}} readOnly/>
      </div>
      <div className='productprice'>{getSymbolFromCurrency('PKR')}{props.def.price}</div>
    </div>
  )
}
