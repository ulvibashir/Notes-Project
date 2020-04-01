import React, { useContext } from 'react';

import { NotesContext } from '../../context/notesContext';
import { Note, SingleNoteItem } from '../../components';
import { Row, Container, Loader } from '../../commons';

export function Homepage() {

    const { notes } = useContext(NotesContext);
    
    const filteredNotes = notes.filter(note => note.isCompleted === false)
    
    return (
        <Container>
            {notes.length !== 0 ?
                <Row>
                    {filteredNotes.map(({ id, title, text, date, color, isCompleted }) => <Note
                        key={id}
                        id={id}
                        title={title}
                        text={text}
                        date={date}
                        color={color}
                        isCompleted={isCompleted}
                    />)}
                </Row>
                :
                <Loader />}
        </Container>


        /* comment Container then uncomment this
            <SingleNoteItem id={notes[0].id}
                title={notes[0].title}
                text={notes[0].text}
                date={notes[0].date}
                color={notes[0].color}
                isCompleted={notes[0].isCompleted} ></SingleNoteItem>
        */
    )
}
