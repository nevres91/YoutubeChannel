import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetVideos } from '../actions/videos';
import request from "../api";
import NextPageSpinner from './NextPageSpinner';



const Cards = () => {
  const { getVideos } = useGetVideos();
  const videos = useSelector((state) => state.videos.videos) //State for fetched videos (no video statistics included)
  const nextPageToken = useSelector((state) => state.videos.nextPageToken)
  const statistics = useSelector(state => state.videos.comments) // State for fetched video statistics for each video. (views, comments, etc)
  const [videoData, setVideoData] = useState([])  //Array of combined states (videos + statistics)
  const [hasMore, setHasMore] = useState(true);
  // const [pageToken, setPageToken] = useState(nextPageToken);


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




  const fetchNextVideos = () => {
    getVideos(nextPageToken);
    console.log(nextPageToken)
  }





  return (
    <div className='cards'>
      <InfiniteScroll
        dataLength={videoData.length}
        next={fetchNextVideos}
        hasMore={Boolean(nextPageToken)}
        loader={<NextPageSpinner />}
        height={785}
        endMessage={
          <div className='end-message'>
            <h3>No more videos to load!</h3>
          </div>
        }
        style={{ overflow: 'auto', display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}
      >
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
      </InfiniteScroll>
    </div>
  )
}

export default Cards
