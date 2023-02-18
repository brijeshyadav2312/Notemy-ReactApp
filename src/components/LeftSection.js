import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import '../css/LeftSection.css'
import { useDispatch, useSelector } from 'react-redux';
import { clearNote, delNote, themeTogle } from '../Redux/action';
import { Link } from 'react-router-dom';

const LeftSection = () => {
    const data = useSelector(state => state.notes)
    const them = useSelector(state => state.theme)
    const dispatch = useDispatch();

    const deleteNotes = (id) => {
        dispatch(delNote(id));
    }

    const ClearAllNotes = () => {
      if(data.length>0 && window.confirm("Clear All Notes?")){
        dispatch(clearNote())
      }
    }
    const toggleTheme = () =>{
      dispatch(themeTogle())
    }

  return (
    <div className='leftSection'>
      <div className='header'>
        <div><Link to='./Notes' className='newNotesHead'><IoMdAdd/> New Notes</Link></div>
        <div className='notesContainer'>
            {
                data?.map((item,idx) => {
                    return (
                        <div key={idx}>
                            <span>
                                <MdChatBubbleOutline/>
                                <p className='leftTitleText'><Link to={`./Details/${idx}`}>{item?.Title}</Link></p>
                            </span>
                            <span>
                                <p><Link to={`./UpateNote/${idx}`}><FiEdit3/></Link></p>
                                <p onClick={() => deleteNotes(idx)}><RiDeleteBin5Fill/></p>
                            </span>
                        </div>
                    )
                })
            }
        </div>
      </div>
      <div className='footer'>
        <button style={data.length<=0 ?{cursor: 'not-allowed'}:{}} onClick={ClearAllNotes}><RiDeleteBin5Fill/> Clear Notes</button>
        <button onClick={toggleTheme}>{!them?(<><MdLightMode/> <span>Light Mode</span></>):(<><MdDarkMode/> <span>Dark Mode</span></>)}</button>
        <button><FiLogOut/> Log out</button>
      </div>
    </div>
  )
}

export default LeftSection
