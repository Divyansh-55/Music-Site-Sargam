import React from 'react'
import { IconContext } from 'react-icons';
import {Link,useLocation } from 'react-router-dom';
import './SidebarButton.css'


export default function SidebarButtons(props) {
  let location = useLocation();
  const currentClass=location.pathname === props.to?"btn-body active":"btn-body"
  return (
    <Link to={props.to}>
        <div className={currentClass}> 
        <IconContext.Provider value={{size :'24px' ,className: 'btn-icon'}}>
            {props.icon}  
            <p className='btn-title'>{props.title}</p>
            </IconContext.Provider>
        </div>
    </Link>
  );
}
