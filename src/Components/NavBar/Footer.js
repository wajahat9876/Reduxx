import React, { Component } from 'react'
import "./NavBar.css"


class footer extends Component{
constructor(props){
    super(props);
    this.state={}
}
render() {

    return (
        <div className='navbar_footer'>
            <div className='navbar_footer_text'>All</div>
            <div className='navbar_footer_text'>Todays Deals</div>
            <div className='navbar_footer_text'>Customer Service</div>
            <div className='navbar_footer_text'>Registry</div>
            <div className='navbar_footer_text'>Gifts Cards</div>
            <div className='navbar_footer_text'>Sell</div>




        </div>
     );
}


}
export default footer