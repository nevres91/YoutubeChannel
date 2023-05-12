import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';

const Cards = () => {
  const videos = useSelector((state) => state.videos.videos) //State for fetched videos (no video statistics included)
  const statistics = useSelector(state => state.videos.comments) // State for fetched video statistics for each video. (views, comments, etc)
  const [videoData, setVideoData] = useState([])  //Array of combined states (videos + statistics)


  useEffect(() => {
    //Matching Id's
    if (videos && statistics) {
      const updatedData = videos.map(video => {
        const videoStatistics = statistics.find(statistic => statistic.id === video.id.videoId);
        return {
          ...video,
          viewCount: videoStatistics ? videoStatistics.statistics.viewCount : null,
          likeCount: videoStatistics ? videoStatistics.statistics.likeCount : null,
          commentCount: videoStatistics ? videoStatistics.statistics.commentCount : null,
          duration: videoStatistics ? videoStatistics.contentDetails.duration : null,
        }
      })
      setVideoData(updatedData);
      // console.log(statistics[0].contentDetails.duration)
    }
  }, [videos, statistics])



  return (
    <div className='cards'>
      {!videoData.length ? (<p>Loading...</p>) : (videoData.map((video => {
        const thumbnail = video.snippet.thumbnails.medium.url
        const title = video.snippet.title
        return <Card
          title={title}
          thumbnail={thumbnail}
          videoId={video.id.videoId}
          viewCount={video.viewCount}
          commentCount={video.commentCount}
          likeCount={video.likeCount}
          duration={video.duration}
          key={video.id.videoId}
        />
      })))}
    </div>
  )
}

export default Cards
