
import { Link } from 'react-router-dom'

function SideNav() {

    return (
        <div className='w-[20%] h-full font-sm   border-r-2 border-zicn-400 p-3 '>
            <h1 className='text-2xl text-white'>
                <i className="text-[#6B5CD3] ri-movie-2-line"></i>
                <span className=' ml-2'>Movies Hub</span>
            </h1>
            <nav className='flex flex-col text-zinc-300 text-xl gap-1'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
                <Link to='/trending' className='hover:bg-[#6B5CD3]  hover:text-white p-5 duration-400 rounded-lg' > <i className="ri-fire-fill"></i> Trending</Link>
                <Link to='/popular'  className='hover:bg-[#6B5CD3]  hover:text-white p-5 duration-400 rounded-lg' ><i className="ri-bard-fill"></i> Popularr</Link>
                <Link to='/movies'   className='hover:bg-[#6B5CD3]  hover:text-white p-5 duration-400 rounded-lg' ><i className="ri-movie-2-fill"></i> Movies</Link>
                <Link to='/tvshow' className='hover:bg-[#6B5CD3]  hover:text-white p-5 duration-400 rounded-lg' ><i className="ri-tv-fill"></i> TV Show</Link>
                <Link to='/people' className='hover:bg-[#6B5CD3]  hover:text-white p-5 duration-400 rounded-lg' > <i className="mr-1 ri-team-fill"></i>People</Link>
            </nav>
        <hr className='border-none h-[1px] bg-zinc-400'/>
            <nav className='flex flex-col text-zinc-300 text-xl gap-1'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1>
                <Link className='hover:bg-[#6B5CD3]  hover:text-white p-5 duration-400 rounded-lg' ><i className="mr-1 ri-information-fill"></i>About</Link>
                <Link className='hover:bg-[#6B5CD3]  hover:text-white p-5 duration-400 rounded-lg' ><i className="mr-1 ri-phone-fill"></i>Contact Us</Link>
            </nav>

            
        </div>

    )
}

export default SideNav
