import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const jsonData = await data.json();
      setVideos(jsonData.items);
    }
    catch (error) {
      console.log("Error occured while fetching videos!!");
      throw error;
    }
  }

  return (
    <div className='flex flex-wrap gap-2'>
      {/* <VideoCard info = {videos[0]}/> */}

      {
        videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      }

    </div>
  )
}

export default VideoContainer
