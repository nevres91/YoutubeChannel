import { useDispatch } from "react-redux";
import request from "../api";
import { fetchComments } from "../slices/videos";

export const useGetComments = () => {

  const dispatch = useDispatch();
  const getComments = async (videoId) => {
    try {
      const res = await request("/videos", {
        params: {
          part: "statistics,contentDetails",
          id: videoId,
          order: "date"
        }
      })
      return res.data.items[0];

    } catch (err) {
      console.log(err)
    }

  }

  const getCommentsCounts = async (videoIds) => {
    const counts = await Promise.all(videoIds.map(getComments)); // STUDY
    dispatch(fetchComments(counts))
    return counts
  }


  return { getCommentsCounts }


}






