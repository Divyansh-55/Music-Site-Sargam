import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from '../Feed/feed';
import Trending from '../Trending/trending';
import Library from '../Library/library';
import Favorites from '../favourite/favourites';
import Player from '../Player/player';
import './home.css';
import Sidebar from '../../Components/Sidebar/sidebar';

export default function Home() {
  return (
    <BrowserRouter>
      <div className='main-body'>
        <Sidebar/>
        <Routes>
          <Route path='/library' element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path='/player' element={<Player />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/favourites' element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
