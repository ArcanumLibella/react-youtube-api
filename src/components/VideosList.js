import React from 'react'
import VideoItem from './VideoItem'

export default function VideosList({videos}) {
    const renderedVideos = videos.map((video) => {
        return (
            <VideoItem key={video.id.videoId} video={video} />
        )
    })

    return (
        <aside className='videosList md:flex md:flex-grow-1 flex-col md:max-w-xs mt-8 md:mt-0 md:ml-4 p-4 bg-blue-50 rounded-xl'>
            <h3 className='font-bold uppercase text-center mb-4'>Videos List</h3>
            <div className='flex flex-col'>
                {renderedVideos}
            </div>
        </aside>
    )
}
