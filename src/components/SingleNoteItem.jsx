import React, { useContext } from "react";
import styled from "styled-components";

import { NotesContext } from "../context/notesContext";

export function SingleNoteItem({ history: { push }, match: { params: { id } } }) {
 
  const { notes } = useContext(NotesContext);
  const note = notes.find(item => item.id == id);
  console.log("single")

  return (
    <div>
      single item
      {note && (
        <SingleItem color={note.color}>
          <p> {note.title}</p>
          <p> {note.text}</p>
          <p> {note.date}</p>
          <p> {note.isCompleted}</p>
        </SingleItem>
      )}

      <button onClick={() => push('/')}> go back </button>
    </div>
  );
}

const SingleItem = styled.div`
  background-color: ${p => p.color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  width: 100px;
`;
