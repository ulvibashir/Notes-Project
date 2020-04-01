import React, { useContext } from 'react';

import { NotesContext } from '../../context/notesContext'
import { Note } from '../../components'
import { Row, Container, Loader } from '../../commons'

export function Archive() {
    const { notes } = useContext(NotesContext);

    const filteredNotes = notes.filter(note => note.isCompleted !== false)
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
    )
}
