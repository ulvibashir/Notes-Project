import React, { useContext, useState } from 'react'

import { SingleNoteItem } from './SingleNoteItem';
import { Form } from '../components/Form';
import { NotesContext } from "../context/notesContext";
import { editNoteApi } from '../API/fetchAPI';

export function SingleItemView({
    history: { push },
    match: {
        params: { id }
    }
}) {
    const [isEdit, setIsEdit] = useState(false)
    const { notes } = useContext(NotesContext);
    const note = !!notes ? notes.find(item => item.id == id) : null;
    const onEdit = () => {
        setIsEdit(isEdit => !isEdit)
    }

    const onSubmit = (fields) => {
        // edit clicked 
        const newNote = {
            id: note.id,
            date: note.date,
            isCompleted: note.isCompleted,
            ...fields
        };

        (async () => {
            const response = await editNoteApi({
                ...newNote
            })
            if (response) {
                push('/');
            }
        })();


        // send request to local reducer

    }

    const onArchive = () => {
        (async () => {
            const response = await editNoteApi({
                ...note,
                id,
                isCompleted: !note.isCompleted
            })
            if (response) {
                push('/');
            }
        })()



        // send request to local reducer
    }
    return (
        <>
            {isEdit
                ? <Form
                    isEdit={true}
                    onSubmit={onSubmit}
                    initial={{
                        title: note.title,
                        text: note.text,
                        color: note.color
                    }}
                />

                : <SingleNoteItem
                    push={push}
                    id={id}
                    onEdit={onEdit}
                    onArchive={onArchive} />
            }
        </>
    )
}
