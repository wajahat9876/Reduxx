import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product'
import './Rightside.css'
 function Rightside(props) {

const [ listofproduct, setlistofproduct ]=useState([]);

useEffect( ()=>{

//Api call
let list=
[
  {id:1234,    name:"Iphone" , rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388698'},
  {id:65443,name:'Iphone' , rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991390335'},
  {id:677635,name:'Iphone',  rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991389318'},
  {id:67768889289,name:'Iphone',  rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388321'},
  {id:716723,name:"Iphone" , rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388698'},
  {id:5571276,name:'Iphone' , rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991390335'},
  {id:992889,name:'Iphone',  rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991389318'},
  {id:3351661,name:'Iphone',  rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388321'},

]

  setlistofproduct(list);

});


  return (
    <div className='rightside_main'  >
      {/* <Product name='iPhone-12 Pro-Max ' rating='36789' price='11220' img='https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388698'/>
      <Product  name='Samsung 11-98 ' rating='36789' price='11220' img='https://ik.imagekit.io/amazon98760/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991390335' />
      <Product  name='Samsung 68GB ' rating='36789' price='11220' img='https://ik.imagekit.io/amazon98760/amazon-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991389318' />
      <Product  name='iPhone 88GB ' rating='36789' price='11220' img='https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388885' />
      <Product  name='iPhone-12 Pro-Max ' rating='36789' price='11220' img='https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388321' />
      <Product name='Celluse-097 ' rating='36789' price='11220' img='https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388063' />
      <Product name=' SB dhban  ' rating='36789' price='11220' img='https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991387988'/>
      <Product name='SNDJandjn ' rating='36789' price='11220' img='https://ik.imagekit.io/amazon98760/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991387148' />
     */}
     {
     listofproduct.map ((item)=>(
      <Link to={'/placeorder/'+item.id}>
       <Product def={item} />
       </Link>))
     }
    </div>
  )
}
export default Rightside
