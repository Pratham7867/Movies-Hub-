import React from 'react';
import { Link } from 'react-router-dom';

function VerticalCards({ data ,title}) {
  if (!Array.isArray(data)) {
    return null; // Ensuring data is an array to prevent errors
  }

 console.log(data);
 console.log(title);
 
 
  return (
    <div className="space-y-4 flex flex-wrap w-full relative bg-[#1F1E24] mt-[1%] justify-center ">
      {data.map((c, i) => (
        <Link 
          to={`/${c.media_type||title}/details/${c.id}}`} 
          key={i} 
          className=" w-[40vh] mr-[5%] mb-[5%] block bg-gray-900 p-4 rounded-md shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
           <img className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover w-full h-[30vh]"src={`https://image.tmdb.org/t/p/original${c.backdrop_path || c.profile_path || c.poster_path}`} alt="" />
          <h1 className="font-black text-white text-xl mb-2">
            {c.title || c.name || c.original_name || c.original_title}
          </h1>
       {c.overview &&
           <p className="text-gray-300">{c.overview.slice(0,200)}<Link className='text-blue-500'>...more</Link></p>
       }
        </Link>
      ))}
    </div>
  );
}

export default VerticalCards;