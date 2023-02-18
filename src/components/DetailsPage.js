import React from 'react'
import { useSelector } from 'react-redux'
import '../css/DetailsPage.css'
import { Link, useParams } from 'react-router-dom';

const DetailsPage = () => {
  const data = useSelector(state => state.notes)
  const{id} = useParams();
  
  return (
    <div className='detailPage'>
      {data[id]?(
        <>
          <p>{data[id]?.Title}</p>
          <p>{data[id]?.Notes}</p>
        </>
      ):(
        <div className='notfound'>
            <p style={{fontSize: '1rem'}}>Data Not Found</p>
            <Link style={{color: '#004ecc', fontWeight:'bold'}} to='/'>Create New Notes</Link>
        </div>
      )
      }

    </div>
  )
}

export default DetailsPage
