import React, { useState } from 'react';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { saveNotes } from '../firebase/firestore';
import '../styles/modal.css'
// import './notes.css'

export default function Example({children}) {
    const [show, setShow] = useState(false);
    const [form, setState] = useState({
      title: '',
      content: ''
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const updateField = e => setState({
      ...form, //spread
      [e.target.name]: e.target.value
    });
    const printValues = e => {
      e.preventDefault();
      console.log(form.title, form.content);
    };
    
  
    return (
      <>
        <Button className='addNote-btn' variant="primary" onClick={handleShow}>
          +
        </Button>
        
        <Modal className='modal-window' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Yu-Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={printValues}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={form.title}
                  type="text"
                  name="title"
                  placeholder="Receta crema de zanahorias"
                  onChange={updateField}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={3} 
                value={form.content}
                name="content"
                onChange={updateField}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {saveNotes(form.title, form.content)}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
            {children}
      </>
    );
  };