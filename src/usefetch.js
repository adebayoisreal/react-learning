import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortcont = new AbortController()

    setTimeout(() => {
      fetch(url, {signal:abortcont.signal})
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        if(err.name === 'AbortError'){
          console.log('gg')
        }
        else{
          setIsPending(false);
          setError(err.message);
        }
       
      })
    }, 1000);

    return ()=> abortcont.abort()

  }, [url])

  return { data, isPending, error };
}
 
export default useFetch