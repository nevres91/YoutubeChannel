import { useDispatch } from "react-redux";
import { useSearchVideos } from "./searchVideos";
import { clearVideos } from "../slices/videos";
import { useState } from "react";
import { useRef } from "react";


export const useSearchButton = () => {
  const { searchVideos } = useSearchVideos();
  const dispatch = useDispatch();
  const isSearchingRef = useRef(false);
  const lastSearchPromiseRef = useRef(null);



  const searchButton = async () => {

    if (isSearchingRef.current) {
      return;
    }
    // we use 'lastSearchPromiseRef' to keep track of the latest search promise. Before starting a new search, we check if there's an ongoing search (via isSearchingRef.current) and wait for the previous search promise to complete using await lastSearchPromiseRef.current. This should help ensure that the subsequent clicks wait for the completion of the previous search before executing.

    isSearchingRef.current = true;
    try {
      dispatch(clearVideos())
      await new Promise((resolve) => setTimeout(resolve, 0));

      const searchPromise = searchVideos();
      lastSearchPromiseRef.current = searchPromise;
      await searchPromise;

    } finally {
      isSearchingRef.current = false;
    }
  };


  return { searchButton };


}

