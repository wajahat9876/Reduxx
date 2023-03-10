import React from 'react'
import './Leftside.css'
 function Leftside() {
  return (
    <div className='leftside_main'>
      <div className='brand'>Brand</div>

     <div > 
     <label className='mobilename'><input type='checkbox' value='Apple'/>Apple</label>
     <label className='mobilename'> <input type='checkbox' value='Samsung'/>Samsung</label>
     <label className='mobilename'> <input type='checkbox' value='Motorolla'/>Motorolla</label>
     <label className='mobilename'> <input type='checkbox' value='Huawei'/>Huawei</label>
     <label className='mobilename'> <input type='checkbox' value='Vivo'/>Vivo</label>
     <label className='mobilename'> <input type='checkbox' value='Infinix'/>Infinix</label>
     <label className='mobilename'> <input type='checkbox' value='Realme'/>Realme</label>
     <label className='mobilename'> <input type='checkbox' value='Nokia'/>Nokia</label>
     <label className='mobilename'> <input type='checkbox' value='Dell'/>Dell</label>

     </div>

    </div>

  )
}
export default Leftside