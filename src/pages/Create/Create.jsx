import React, { useContext } from "react";
import uuid from "react-uuid"; 

import { NotesContext } from '../../context/notesContext'
import { Form } from '../../components/';
import { addNoteApi } from '../../API/fetchAPI'

export function Create({ history }) {
  const { addNote } = useContext(NotesContext);

  const onSubmit = (note) => {
    const newNote = {
      id: uuid(),
      date: Date.now(),
      isCompleted: false,
      ...note
    }
    addNote(newNote);

    (async () => {
      const response = await addNoteApi(newNote);
      if(response){
        history.push('/');
      }
    })()
  }



  return (
    <Form isEdit={false} onSubmit={onSubmit}/>
  );
}

