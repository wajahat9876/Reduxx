import React from 'react'
import Leftside from './Leftside/Leftside'
import Rightside from './Rightside/Rightside'

 function Displaycontent() {
  return (
    <div style={{display:'flex'}}>
      <div><Leftside /></div>
      <div> <Rightside /> </div>
    </div>
  )
}
export default Displaycontent
