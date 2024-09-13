import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <iframe
          width="760"
          height="415"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>

        <LiveChat/>
      </div>

      <CommentsContainer/>

      

    </div>
  )
}

export default WatchPage
