import React from 'react'
import { Link } from 'react-router-dom'

function HorizontalCards({ data }) {

    console.log(data);
    
    return (
        <div className='w-full   '>


            <div className='w-full overflow-x-auto  flex'>
                {data.map((data, i) => (
                    <Link
                        to={`/${data.media_type || title}/details/${data.id}}`}
                        className='min-w-[25%] text-zinc-500  bg-zinc-900 mr-5'>
                        <img className="object-cover w-full h-[19vh]" src={`https://image.tmdb.org/t/p/original${data.backdrop_path || data.profile_path || data.poster_path}`} alt="" />
                        <h1 className=' font-black text-white text-xl  '>{data.title || data.name || data.original_name || data.original_title}</h1>
                        <p className='w-[] text-white '>{data.overview.slice(0, 100)}<span className='text-blue-500'>...more</span></p>
                    </Link>))}
            </div>

        </div>
    )
}

export default HorizontalCards
