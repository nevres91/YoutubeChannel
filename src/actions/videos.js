import { useDispatch, useSelector } from "react-redux";
import request from "../api";
import { fetchVideos } from "../slices/videos";
import { useGetComments } from "./coments";


export const useGetVideos = () => {

  const videos = useSelector(state => state.videos.videos)

  const { getCommentsCounts } = useGetComments(); // fetch all statistics about a video
  const dispatch = useDispatch();

  const getVideos = async (nextPageToken) => {
    try {
      const res = await request("/search", {
        params: {
          part: "snippet",
          channelId: "UCFBeNQ_AqyFrkmBFp6EHbpw",
          type: "video",
          maxResults: 12,
          order: "date",
          pageToken: nextPageToken
        }

      })
      const items = res.data.items;
      dispatch(fetchVideos({
        videos: items,
        nextPageToken: res.data.nextPageToken
      }))
      const videoIds = res.data.items.map((item) => item.id.videoId)
      const commentCounts = await getCommentsCounts(videoIds) //STUDY
    } catch (err) {
      console.log(err)
    }
  }


  return { getVideos };


}

