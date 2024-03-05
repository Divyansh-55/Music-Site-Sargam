import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from '../Feed/feed';
import Trending from '../Trending/trending';
import Library from '../Library/library';
import Favorites from '../favourite/favourites';
import Player from '../Player/player';
import './home.css';
import Sidebar from '../../Components/Sidebar/sidebar';
import Login from '../Auth/auth';
import { setClientToken } from '../../sargam';
export default function Home() {
  const [token,setToken]=useState("");

  useEffect(()=>{
    const token=window.localStorage.getItem("token");
    const hash=window.location.hash;  
    window.location.hash="";
    if(!token && hash){
      const acessToken=hash.split('&')[0].split('=')[1];
      window.localStorage.setItem("token",acessToken);
      setToken(acessToken);
      setClientToken(acessToken);
    }else{
      setToken(token);
      setClientToken(token);
    }
  },[]);

  return !token ?
(
      <Login/>
)
    :
(
    <BrowserRouter>
      <div className='main-body'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path='/player' element={<Player />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/favourites' element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
)  
}
