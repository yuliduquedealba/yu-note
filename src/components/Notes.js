import React, { useEffect, useState } from 'react';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getNotesList } from '../firebase/firestore';
import Logout from './Logout.js'
import MyModal from './Modal.js';
import '../styles/notes.css'

export const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      getNotes()
    }, []) 

    const getNotes = async () => {
      const notesList = await getNotesList();
      setNotes(notesList);
      setIsLoading(false)
    }
    if (isLoading) {
      return <div>Loading...</div>
    } else {
      return (
      <div>        
          <Logout />
        <section className="header">
          <h1>Yu-Note</h1>
        </section>
        <section className='container-notes'>
          {notes.map((note) => {
            return (
            <div key={note.title} className='container-note'>
                <b><p>{note.title}</p></b>
                <p>{note.content}</p>
            </div>
            )
          })}
        </section>
          <MyModal getNotes={getNotes}/>
      </div>
    );
    }
}

export default Notes;


    // const addNote = (note) => {
    //   //Actualizar estado note
    //   setNotes([...notes, note])
    // } 
