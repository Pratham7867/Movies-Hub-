import  { useEffect, useState } from 'react'
import axios from '../Utils/Axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import TopNav from '../Templates/TopNav';
import Dropdown from '../Templates/DropDown';
import VerticalCards from '../Templates/VerticalCards';


function TVShow() {
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const [category, setCategory] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [type, setType] = useState('airing_today');

    const getTvshow = async () => {
        try {
          const { data } = await axios.get(`tv/${type}?page=${page}`);
          
          if (data.results && data.results.length > 0) {
            setCategory((prevState) => [...prevState, ...data.results]);
            setPage((prevPage) => prevPage + 1);
          } else {
            setHasMore(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      const refresh = () => {
       if (category.length===1) {
        getTvshow()
       }
       else{
        setPage(1)
        setCategory([])
        getTvshow()
       }
      };
    
      // const refresh = () => {
      //   setPage(1);
      //   setCategory([]);
      //   setHasMore(true);
      //   getTrendingData();
      // };
      useEffect(() => {
        refresh();
      }, [type]);
    return (
        <div className='w-screen h-screen flex flex-col overflow-hidden'>
        <div className='flex items-center justify-center relative border-b border-gray-300 p-4'>
          <i onClick={() => navigate(-1)} className="text-xl text-[#6B5CD3] ri-arrow-left-fill cursor-pointer"></i>
          <h1 className='text-xl text-zinc-600 font-semibold flex-grow text-center'>TvShow</h1>
          <TopNav />
        <div className='flex justify-center gap-4 p-4'>
          <Dropdown Option={['on_the_air','popular','top_rated',"airing_today"]} func={(i) => setType(i)} />
        </div>
        </div>
        <div className='flex-grow overflow-y-auto'>
          <InfiniteScroll
            dataLength={category.length}
            next={getTvshow}
            hasMore={hasMore}
            loader={<p>Loading...</p>}
          >
            <VerticalCards data={category} title='tv'/>
          </InfiniteScroll>
        </div>
      </div>
  )
}

export default TVShow
