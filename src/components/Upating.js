import React from 'react'
import '../css/WriteNotes.css'
import { HiOutlineSave } from "react-icons/hi";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../Redux/action';
import Quotes from './Quotes';

const Updating = () => {
    const data = useSelector(state => state.notes)
    const dispatch = useDispatch();
    const {id} = useParams();

  const addNoteFunc = (e) => {
      e.preventDefault();
      const obj = {
        Title: e.currentTarget.elements["title"].value,
        Notes: e.currentTarget.elements["notes"].value
      }
      if(obj.Title.length>0 && obj.Notes.length>0){
        dispatch(updateNote(obj,id))
        alert('Saved Successfully')
      }
  }

  return (
    <div className='rightMainSection'>
    {data[id]?(
      <div className='writeNote'>
        <form className='writeNote' onSubmit={addNoteFunc}>
          <input name="title" defaultValue={data[id]?.Title} type='text' placeholder='Title'/>
          <textarea name="notes" defaultValue={data[id]?.Notes} placeholder='Take a Note...'></textarea>
          <button type='submit' className='addNote'>
            <HiOutlineSave />
          </button>
        </form>
        <Quotes/>
      </div>):(
        <div className='notfound'>
            <p>Data Not Found</p>
            <Link style={{color: '#004ecc', fontWeight:'bold'}} to='/'>Create New Notes</Link>
        </div>
      )
    }
    </div>
  )
}

export default Updating
