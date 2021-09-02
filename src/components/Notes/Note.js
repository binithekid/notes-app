import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Notes.css";

const Note = ({ id, text, date, handleDeletNote }) => {
  return (
    <div className='note'>
      <span>{text} </span>
      <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeletNote(id)}
          className='delete-icon'
          size='1.3rem'
        />
      </div>
    </div>
  );
};

export default Note;
