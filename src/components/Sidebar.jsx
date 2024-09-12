import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className='shadow-md flex flex-col gap-5 divide-y divide-gray-400 p-4 w-[17%]'>

      <div className='flex flex-col gap-2'>
        <ul className=' text-sm flex flex-col gap-2'>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>Shorts</li>
          <li>Gaming</li>
          <li>Movies</li>
          <li>Live</li>
        </ul>
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className=' font-semibold'>Explore</h1>
        <ul className=' text-sm flex flex-col gap-2'>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion and Beauty</li>
          <li>Podcasts</li>
        </ul>
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className=' font-semibold'>More from YouTube</h1>
        <ul className=' text-sm flex flex-col gap-2'>
          <li>YouTube Studio</li>
          <li>YouTube Music</li>
          <li>YouTube Kids</li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar
