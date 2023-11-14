import { useDispatch, useSelector } from "react-redux";
import request from "../api";
import { fetchVideos } from "../slices/videos";
import { useGetComments } from "./coments";
import { clearVideos } from "../slices/videos";


export const useSearchVideos = () => {

  const videos = useSelector(state => state.videos.videos)

  const { getCommentsCounts } = useGetComments(); // fetch all statistics about a video
  const dispatch = useDispatch();
  const searchBar = document.querySelector('.search');

  const searchVideos = async () => {
    const value = searchBar.value;
    try {
      const res = await request("/search", {
        params: {
          part: "snippet",
          channelId: "UCFBeNQ_AqyFrkmBFp6EHbpw",
          type: "video",
          order: "date",
          maxResults: 50,
          q: value
        }

      })
      const items = res.data.items;
      dispatch(fetchVideos({
        videos: items,
      }))
      const videoIds = res.data.items.map((item) => item.id.videoId)
      const commentCounts = await getCommentsCounts(videoIds) //STUDY
    } catch (err) {
      console.log(err)
    }
  }


  return { searchVideos };


}

