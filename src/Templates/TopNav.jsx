import { Link } from 'react-router-dom';
import axios from '../Utils/Axios';
import React, { useEffect, useState } from 'react'


function TopNav() {
  const [query, setquery] = useState('');
  const [search, setsearch] = useState([])

  const getsearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`)
      setsearch(data.results);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getsearch()
  }, [query])

  return (
    <div className='w-full h-[10vh]  relative flex justify-start mx-[20%]  text-sm item-center mt-5 '>
      <i className="text-zinc-400 text-2xl ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        type="text " placeholder='Search anything' className='w-[50%] h-[40%] mx-4 text-white border-none outline-none' />

      {query.length > 0 &&
        <i onClick={() => setquery('')} className="ri-close-fill"></i>
      }
      <div className='absolute w-[50%] max-h-[50vh] z-[100] rounded mt-4 top-[70%] overflow-auto'>

      {search.map((items,idx)=>(
                <Link to={`/${items.media_type}/details/${items.id}`} key={idx} className='flex items-center bg-[#1F1E21] rounded  gap-5 w-full h-[20vh] px-4' > 
                <img className='h-[10vh] w-[10vh] rounded-xl object-cover' src={`https://image.tmdb.org/t/p/original/${items.backdrop_path || items.profile_path || items.poster_path}`} alt="" />
                <h5 className='font-semibold text-white'>{items.original_title || items.title || items.name }</h5>
             </Link>
             ))}
      </div>
    </div>

  )
}

export default TopNav
