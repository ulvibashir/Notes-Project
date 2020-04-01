import React, { useContext } from "react";
import styled from "styled-components";

import { NotesContext } from "../context/notesContext";

export function SingleNoteItem({ id, title, text, date, color, isCompleted }) {
 
  const { notes } = useContext(NotesContext);
  const note = notes.find(item => item.id == id);
  console.log("object")
  return (
    <div>
      single item
      {note && (
        <SingleItem color={color}>
          <p> {title}</p>
          <p> {text}</p>
          <p> {date}</p>
          <p> {isCompleted}</p>
        </SingleItem>
      )}
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
