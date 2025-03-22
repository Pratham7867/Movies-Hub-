import React, { useEffect, useState } from 'react';
import SideNav from '../Templates/SideNav';
import TopNav from '../Templates/TopNav';
import axios from '../Utils/Axios';
import Header from '../Templates/Header';
import HorizontalCards from '../Templates/HorizontalCards';
import Dropdown from '../Templates/DropDown';
import VerticalCards from '../Templates/VerticalCards';

function Home() {
  document.title = "Movies Hub | Homepage";
  const [wallpaper, setWallpaper] = useState(null);
  const [Trending, setTrending] = useState(null);
  const [category, setCategory] = useState('all');

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      let random = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(random);
    } catch (error) {
      console.log(error);
    }
  };
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
      setTrending(data.results || []);
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };

  useEffect(() => {
    getTrending();
    if (!wallpaper) getWallpaper();
  }, [category]);

  return wallpaper && Trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-hidden overflow-y-auto">
        <TopNav />
        <Header data={wallpaper} />
        <div className="mb-1">
          <h1 className="text-xl text-zinc-300 font-bold p-4">Trending</h1>
        </div>
        <Dropdown
        className='absolute r-0'
          Option={['tv', 'movie', 'all']}
          func={(i) => setCategory(i)}
        />

        <HorizontalCards data={Trending} />
        <VerticalCards data={''}></VerticalCards>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}

export default Home;
