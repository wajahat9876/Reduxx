import React, { useEffect, useState } from 'react';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import { login, setLoginStart, setLoginFailure, setLoginSucces } from '../../store/counter/counter.action';

import { setLoginStartAsync } from '../../store/counter/counter.action';
import { selectCountReducer } from '../../store/counter/counter.selector';
import Placeorder from '../Placeorder/Placeorder';

import { Routes, Route, Navigate, Link } from "react-router-dom";





export default function Login() {


  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(selectCountReducer);
  useEffect(() => {
    if (user?.id) { <Link to='/display' replace={true} /> }
  }, [loading, user?.id])

 

  const handleLogin = (e) => {
   e.preventDefault();
    dispatch(setLoginStartAsync({ id: email, password: password }));
    

  };

  // const router= useRoutes();


  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (email === 'myemail@com' && password === '12345') {
  // successful login logic

  // console.log('Successful login!');
  // } else {
  //   setError('Invalid username or password');
  //   }
  // };

  return (
    <form className='formlogin' onSubmit={handleLogin}>
      <div className='login'>


        <div className='lab'>
          <label  >E---mail 
            <input onChange={(e) => setemail(e.target.value)}
             placeholder='enter e-mail' 
             type={'text'}
          ></input></label>
          <br></br> <label className='label1' > Password
          <input onChange={(e) => setpassword(e.target.value)}
           className='label1' placeholder='password***' 
           type={'password'}></input></label><br />
        </div>
        <button  type='submit' className='loginbtn'>Login</button>
      </div></form>

  )
}
