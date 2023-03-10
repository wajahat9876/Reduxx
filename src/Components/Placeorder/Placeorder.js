import { Grid, Rating } from '@mui/material';
import React from 'react';
import './Placeorder.css';
import { useEffect,useState } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map'
import { useParams } from 'react-router-dom';
export default function Placeorder() {

  const [ productdetails, setlistofproduct ]=useState([]);
   let {id}=useParams();
  useEffect( ()=>{
  
  //Api call
  let list=
  [ 
    { "id":1234,
       "name":"iphone11",
       "image":"https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388698",
       "rating":"34566",
       "review":"1000",
       "price":"120000",
       "delivery":"wednesday,19,1919"
},
{ "id":65443,
"name":"Samsung S3",
"image":"https://ik.imagekit.io/amazon98760/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991390335",
"rating":"34566",
"review":"1000",
"price":"130000",
"delivery":"wednesday,19,1919"
},
{ "id":677635,
"name":"Samsung",
"image":"https://ik.imagekit.io/amazon98760/amazon-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991389318",
"rating":"34566",
"review":"1000",
"price":"150000",
"detail":"wednesday,19,1919 "
},
    {id:1234,    name:"Iphone11" , rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388698'},
    {id:65443,name:'Samsung' , rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991390335'},
    {id:677635,name:'Samsungse',  rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991389318'},
    {id:67768889289,name:'Iphone',  rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388321'},
    {id:716723,name:"Iphone" , rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388698'},
    {id:5571276,name:'Iphone' , rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991390335'},
    {id:992889,name:'Iphone',  rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991389318'},
    {id:3351661,name:'Iphone',  rating:'34567', price:'120000', img:'https://ik.imagekit.io/amazon98760/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676991388321'},
  
  ]
   let item= list.filter(item=>{
      if(item.id==id) return item;
    })
    setlistofproduct(item[0]);
  
  });
  



  return (
    <div>
     
        <Grid container>
        <Grid item xs={5}><img className='placeorderimg' alt='' src={productdetails.image} /></Grid>
        <Grid item xs={4}>
            <div className='placeorderdescription'>
                <div style={{fontSize:'22px', fontWeight:'bold'}}>{productdetails.name} </div>
                <div style={{fontSize:'13px'}}>
                <Rating name='disabled'value='3'/>{productdetails.rating}</div>
                <hr></hr>
                <div style={{color:'#BB4325',fontWeight:'bold' ,fontSize:'22px'}}>{getSymbolFromCurrency('USD')}112000.00</div>
                <div>No Import Fees Deposit & $47.37{productdetails.detail} Shipping to Pakistan Details Available at a lower price from other sellers that may not offer free Prime shipping.
                    Color:<br /> Astral Black <br /> Size: 8GB Ram</div>

            </div>
        </Grid>
        <Grid item xs={3}> 
                <div className='grid3' style={{width:'200px',height:'500px' }}>
                    <div className='detail'>import <strong>Febuary 19-1999</strong> on <strong>Monday</strong> No Import Fees Deposit & $47.37 Shipping to Pakistan <br/>OnePlus 9 Astral Black, 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage,120Hz Fluid Display, Hasselblad Triple Camera, 65W Ultra Fast Charge,15W Wireless Charge, with Alexa Built-in <br /> Only 19 left in stock - order soon </div>
                <button className='placeorderbtn addtocart'>Add To Cart</button>
                <button className='placeorderbtn buynow'>Buy Now</button>
                </div>
                
        </Grid>

        </Grid>
        
      
    </div>
  )
}
