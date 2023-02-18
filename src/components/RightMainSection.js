import React from 'react'
import '../css/WriteNotes.css'
import { MdOutlineDownloadDone } from "react-icons/md";
import { useDispatch} from 'react-redux';
import { addNote } from '../Redux/action';
import Quotes from './Quotes';

const RightMainSection = () => {

  const dispatch = useDispatch();

  const addNoteFunc = (e) => {
      e.preventDefault();
      const obj = {
        Title: e.currentTarget.elements["title"].value,
        Notes: e.currentTarget.elements["notes"].value
      }
      if(obj.Title.length>0 && obj.Notes.length>0){
        dispatch(addNote(obj))
        e.currentTarget.elements["title"].value ="";
        e.currentTarget.elements["notes"].value="";
        alert('Added Successfully')
      }
  }
  return (
    <div className='rightMainSection'>
      <div className='writeNote'>
        <form className='writeNote' onSubmit={addNoteFunc}>
          <input name="title" type='text' placeholder='Title Here'/>
          <textarea name="notes" placeholder='Take a Note...'></textarea>
          <button type='submit' className='addNote'>
            <MdOutlineDownloadDone/>
          </button>
        </form>
      </div><br/>
      <Quotes/>
    </div>
  )
}

export default RightMainSection
