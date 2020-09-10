import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);
  const myHeaders = new Headers();
  const myInit = { method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default' };
  useEffect(() => {
    fetch(API, myInit)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
