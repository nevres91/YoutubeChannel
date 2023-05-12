import { useDispatch } from "react-redux";
import request from "../api";
import { fetchVideos } from "../slices/videos";
import { useGetComments } from "./coments";


export const useGetVideos = () => {

  const { getCommentsCounts } = useGetComments(); // fetch all statistics about a video
  const dispatch = useDispatch();

  const getVideos = async () => {
    try {
      const res = await request("/search", {
        params: {
          part: "snippet",
          channelId: "UCFBeNQ_AqyFrkmBFp6EHbpw",
          type: "video",
          maxResults: 12,
          order: "date",
          pageToken: ''
        }

      })
      const items = res.data.items;
      console.log(res.data)
      dispatch(fetchVideos({
        videos: items,
        nextPageToken: res.data.nextPageToken
      }))
      const videoIds = res.data.items.map((item) => item.id.videoId)
      const commentCounts = await getCommentsCounts(videoIds) //STUDY
      return res.data.nextPageToken;
    } catch (err) {
      console.log(err)
    }
  }


  return { getVideos };


}

