
import React, { Component } from 'react';
import "./NavBar.css"
import { Link } from 'react-router-dom';


class NavBar extends Component{
constructor(props){
super(props);
this.state={}

}
render () {
return ( 

    
    <div className='navbar_component'> 
    <div className= 'navbar_logo'> </div>
    <div className='navbar_locator'>
     <div className='navbar_locatorimg'></div>
    <div className='navbar_location'> Pakistan</div> 
    </div>
    <div className='navbar_searchcomponent'>
       {/* //1stdiv */}
        <div>
            <select className='dropbox'>
                <option>All</option>
                <option>Art&Craft</option>
                <option>Automation</option>
                <option>Baby</option>
                <option>Books</option>
                <option>Cars</option>
                <option>Mobiles</option>
                 <option>Grocery</option>
                <option>Property</option>
            
            </select>
        </div>
        {/* 2nddiv */}
        <div> <input type="text" className='navbar_searchbox' ></input></div>
        {/* 3rd div */}
        <div className='searchicondiv'><div className='navbar_searchicon'/></div>
    </div>
    <div className='navbar_sigin'>
        <Link to={'/login'}><div style={{fontSize:"12px"}}>Hello Log-in</div></Link> 
        <div style={{fontWeight:'bold'
    }}>Account&Lists</div></div>
    
    <div className='navbar_order'><div style={{fontSize:"12px"}}>Return</div><div style={{fontWeight:'bold'}}>& order</div></div>
    <div className='navbar_cart'>
        <div src=''className='cart_icon' ></div>
        <div className='cart_item'>0</div>
        <div className='cart'>Cart</div>
       
        </div>
  </div>
  );
 
 }
}
export default NavBar