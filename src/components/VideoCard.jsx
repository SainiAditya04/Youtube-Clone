import React from 'react'

const VideoCard = ({info}) => {
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className=' p-2 w-[360px]'>
        {/* thumbnail image  */}
        <div>
            <img 
            src={thumbnails.medium.url} 
            alt="thumbnail video" 
            className='rounded-md'
            />
        </div>

         {/* title and description */}
        <div>
            <p className='font-semibold my-1'>{title}</p>

            <p className='text-sm text-gray-500'>{channelTitle}</p>
            <p className='text-sm text-gray-500' >{statistics.viewCount} views</p>
        </div>
    </div>
  )
}

export default VideoCard
