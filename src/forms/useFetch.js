
// cSpell:ignore Connor itsbridgeschool

// possibly replace the use of this source file with
//    https://use-http.com/#/?id=examples-videos
//                 useFetch
// 🐶 React hook for making isomorphic http requests


// taken from: https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
// Author: Connor Wilson
//  Tech Lead at @JoinLeague, Instructor Ops Lead at @itsbridgeschool. Building things and teaching folks in Toronto.

// How to Use:
//    const [data, loading] = useFetch(pastDataURL);


import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  async function fetchUrl(url) {
    try {
    const response = await fetch(url);
    const json = await response.json();

    setData(json);
    }
    catch(err) {
      console.log('Unable to load err:', err);
      console.log('Unable to load url:', url);
    }
  }

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  return [data];
}
