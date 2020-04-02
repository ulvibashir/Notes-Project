import React, { useContext, useState } from "react";
import styled from "styled-components";

import { NotesContext } from "../context/notesContext";
import { COLORS, Container, Loader } from "../commons";
import { DeleteModal } from "./DeleteModal";
import { deleteNoteApi } from '../API/fetchAPI';

export function SingleNoteItem({ push, id, onEdit, onArchive }) {

  const [isModalActive, setIsModalActive] = useState(false);
  const { notes, deleteNote } = useContext(NotesContext);
  const note = !!notes ? notes.find(item => item.id === id) : null;

  const toggleModal = () => {
    setIsModalActive(isModalActive => !isModalActive)
  }
  const deleteSingleNote = () => {

    (async () => {
      const response = await deleteNoteApi({ id: note.id })
      if (response) {
        push('/');
      }
    })()

    deleteNote(note);


  };

  return (

    <Container>
      <SingleItemContainer>

        {note ? (
          <>
            <SingleItem>
              <Header color={note.color}>
                <h1> {note.title}</h1>
              </Header>
              <StyledDate>{new Date(note.date).toLocaleString()}</StyledDate>
              <Text> {note.text}</Text>
            </SingleItem>
            {isModalActive && <DeleteModal onDelete={() => deleteSingleNote(note.id)}
              onCancel={() => toggleModal()} />
            }
            <ButtonContainer>
              <StyledBtn onClick={() => onEdit()}> Edit </StyledBtn>
              <StyledBtn onClick={() => onArchive()}> { note.isCompleted ? 'Unarchive' : 'Archive' } </StyledBtn>
              <StyledBtn onClick={toggleModal}> Delete </StyledBtn>
              <StyledBtn onClick={() => push("/")}> Go Back </StyledBtn>
            </ButtonContainer>
          </>
        )
          :
          <Loader />
        }
      </SingleItemContainer>
    </Container>

    
  );
}
const SingleItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  z-index: -1;
`;

const SingleItem = styled.div`
  display: block;
  border-radius: 20px;
  height: 500px;
  width: calc(100% / 3 * 2 );
  background-color: ${COLORS.stickyBackground};
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.5);
  overflow: hidden;

`;
const Header = styled.div`
  background-color: ${p => p.color};
  font-size: 19px;
  border-radius: 20px 20px 0 0;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    padding: 10px 8px;
    text-align: center
  }
`;

const StyledDate = styled.div`
  font-family: "Arial";
  font-size: 16px;
  color: black;
  padding: 15px 0;
  line-height: 13px;
  border-bottom: 1px solid gray;
  margin: 0 10px;
`;
const Text = styled.div`
  margin-top: 30px;
  font-family: "Arial";
  color: black;
  padding: 0 25px;
  font-size: 18px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledBtn = styled.button`
  height: 40px;
  width: 120px;
  font-size: 18px;
  border: 1px solid grey;
  border-radius: 7px;
  background-color: white;
  cursor: pointer;
  outline: none;
  margin-bottom: 15px;
  &:hover {
    color: ${COLORS.primary};
    border-color: ${COLORS.primary};
  }
`;
