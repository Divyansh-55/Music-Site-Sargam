import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from '../feed';
import Trending from '../trending';
import Library from '../library';
import Favorites from '../favourites';
import Player from '../player';
import './home.css';

export default function Home() {
  return (
    <BrowserRouter>
      <div className='main-body'>
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
