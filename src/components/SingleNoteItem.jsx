import React, { useContext,useState } from "react";
import styled from "styled-components";

import { NotesContext } from "../context/notesContext";
import { COLORS } from "../commons/colors";
import { DeleteModal } from "./DeleteModal";

export function SingleNoteItem({
  history: { push },
  match: {
    params: { id }
  }
}) {
  const [isActive,setIsActive] = useState(false);
  const { notes } = useContext(NotesContext);
  const { deleteNote } = useContext(NotesContext);
  const note = !!notes ? notes.find(item => item.id == id) : null;

  const toggleModal = () => {
    setIsActive(isActive => !isActive)
  }
  const deleteSingleNote = () => {
    (async () => {
      const res = await fetch(`http://localhost:3002/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      if (data) {
        push("/");
      }
    })();
    deleteNote(note);
  };

  return (
    <SingleItemContainer>
      {note && (
        <div>
          <SingleItem>
            <Header color={note.color}>
              <h1> {note.title}</h1>
            </Header>
            <StyledDate>{new Date(note.date).toLocaleString()}</StyledDate>
            <Text> {note.text}</Text>
          </SingleItem>
         {isActive && <DeleteModal onDelete={() => deleteSingleNote(note.id)}
                       onCancel={()=>toggleModal()} />
      }
                       </div>
      )}
      <ButtonContainer>
        <StyledBtn onClick={() => push("/form")}> Edit </StyledBtn>
        <StyledBtn onClick={() => push("/")}> Archive </StyledBtn>
        <StyledBtn onClick={toggleModal}> Delete </StyledBtn>
      </ButtonContainer>
    </SingleItemContainer>
  );
}
const SingleItemContainer = styled.div`
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  z-index: -1;
`;

const SingleItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 300px;
  width: 350px;
  background-color: ${COLORS.stickyBackground};
`;
const Header = styled.header`
  background-color: ${p => p.color};
  font-size: 19px;
  border-radius: 20px 20px 0 0;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    padding: 10px 8px;
  }
`;

const StyledDate = styled.div`
  font-family: "Arial";
  font-size: 16px;
  color: black;
  padding: 30px 0;
  line-height: 13px;
  border-bottom: 1px solid gray;
  margin: 0 10px;
`;
const Text = styled.div`
  margin-top: 56px;
  font-family: "Arial";
  color: black;
  text-align: center;
  padding: 0 10px;
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
