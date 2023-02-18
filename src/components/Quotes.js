import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Quotes = () => {

    const them = useSelector(state => state.theme)
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        (async _ =>{
          const res = await fetch('https://quotes.rest/qod?language=en');
          const data = await res.json();
          setQuote(data.contents.quotes[0]);
        })();
      },[])

  return (
    <div className='quotes' style={{
        backgroundImage: `url(https://source.unsplash.com/random/900%C3%97700/?${!them?('black,dark'):('white,paper,white-paper')}?blur)`, 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        }}>
        <span>
          <p>{quote.quote}</p>
          <p>{quote.author}</p>
        </span>
    </div>
  )
}

export default Quotes
