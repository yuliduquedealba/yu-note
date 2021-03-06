import React, { useEffect, useState } from 'react';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { useNavigate } from "react-router-dom";
import { signOut } from "../firebase/firebaseImport.js";
import { getNoteList } from '../firebase/firestore';
import auth from "../firebase/firebaseConfig.js"
import Example from './Modal.js';
import '../styles/notes.css'

export const Logout = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
      getNotes()
    }, []) 
    const logoutBtn = () => {
        signOut(auth)
        .then((result) => {
          if (window.confirm("¿Estás seguro de cerrar sesión?")) {
            navigate('/');
          }
        });
    };

    const getNotes = async () => {
      const notas = await getNoteList();
      console.log(notas);
      setNotes(notas);
      setIsLoading(false)
      console.log(notes);
    }
    if (isLoading) {
      return <div>Loading...</div>
    } else {
      return (
      <div>        
        <button className="logout-btn" onClick={logoutBtn}>
          Logout
        </button>
        <section className="header">
          <h1>Yu-Note</h1>
        </section>
        <section className='container-notes'>
          {notes.map((note) => {
            return (
              <div>
                <p>{note.title}</p>
                <p>{note.content}</p>
              </div>
            )
          })}
        </section>
          <Example />
      </div>
    );
    }
}

export default Logout;

