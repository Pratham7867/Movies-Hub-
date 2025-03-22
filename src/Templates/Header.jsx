import React from 'react';
import { Link } from 'react-router-dom';

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), 
        url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path || data.poster_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className='text-5xl font-black text-white  '>{data.title || data.name || data.original_name || data.original_title}</h1>
      <p className='w-[] text-white mt-3 '>{data.overview.slice(0, 200)}
        <Link
        to={`/${data.media_type || title}/details/${data.id}}`}
        className='text-blue-500'>...more</Link></p>
      <p className='text-white'>
        <i className=" text-yellow-500 ri-megaphone-fill mt-3 mb-4"></i>
        {data.release_date || data.first_air_date}
        <i className="text-yellow-500 ri-movie-fill ml-3"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className='p-4 bg-[#6556CD] text-white mt-4 rounded text-bold'>
        Watch Tailer
      </Link>
    </div>
  );
}

export default Header;
