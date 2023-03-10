import React from 'react'
import "./Advertismentone.css"

function Advertismentone  (props) {
  return (
    <div className='onemain'>
      <div className='oneheader'> {props.header}</div>
      <div className='onebody'>
        <img  src={props.img} alt='' width='300px' height={'260px'} ></img>
      </div>
     
      <div className='onefooter'>{props.footer}</div>
    </div>
    

)


}



export default Advertismentone



