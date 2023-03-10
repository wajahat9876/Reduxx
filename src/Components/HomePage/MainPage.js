import React, { Component } from 'react';
import Advertismentone from './Advertismentone/Advertismentone';
import Advertismentfour from './Advertismentfour/Advertismentfour';
import "./Mainpage.css"
class MainPage extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render () {
        return ( 
        
            <div className='mainpage'> 
           <div style={{paddingTop:'280px',display:'flex',flexWrap:"wrap"}}>
             <Advertismentone header='70% Off Electronic Device' footer='See more' img='https://ik.imagekit.io/amazon98760/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676991386671'/>
             <Advertismentfour />
             <Advertismentone  header='Sofa 50% Off Black' footer='See more'  img='https://ik.imagekit.io/amazon98760/amazon-image/tab9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676991386239'/>
             <Advertismentone header='Tab Table-White' footer='See more' img='https://ik.imagekit.io/amazon98760/amazon-image/tab6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676991385169'/>
             <Advertismentone header='Food & Supply' footer='See more' img='https://ik.imagekit.io/amazon98760/amazon-image/tab2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676991383432'/>
             <Advertismentone header='Watches'footer='See more' img='https://ik.imagekit.io/amazon98760/amazon-image/box4_3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676991376780'/>
          </div>
            </div>
            
        );
         
         }
}
export default MainPage;