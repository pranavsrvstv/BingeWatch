import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userSlice, { selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
import './Nav.css'
const Nav = () => {
    const user =useSelector(selectUser);

    const [show,handleshow]=useState(true);
    console.log(user.email ,'is user email');
    //useNavigate can be used to navigate from another link , ie by changing the url location 
    const Navigate= useNavigate();

    const transitionNavbar=()=>{
        if(window.scrollY>100){
            handleshow(false);
        }
        else{
            handleshow(true);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar);
        return ()=>window.removeEventListener('scroll',transitionNavbar)
    },[]);
  return (
    <div className={`nav ${!show && 'nav_black_bg'}`}>

        <div className="nav__content">
        <p onClick={()=>Navigate('/')} style={{ cursor:"pointer", color:'yellow', backdropFilter:"blur(45px)" ,opacity:'100' , padding:'2px' ,fontSize:'30px',fontWeight:'bold' ,fontFamily:'Helvetica'}}>BingeWatch</p>
        <div className='nav_user'>
        <p className="app_user_name" >Hey, {user.email}</p>
        <img onClick={()=>Navigate('/profile')} src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_1280.png" alt="user_avatar" className='nav_avatar'/>
       
        </div>
        </div>
 
    </div>
  )
}

export default Nav
