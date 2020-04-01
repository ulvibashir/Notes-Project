import React, { createContext, useReducer, useEffect } from 'react'

import { getNotes } from '../API/fetchAPI';

export const NotesContext = createContext();


// Action type
const SET_NOTE = 'SET_NOTE';
const ADD_NOTE = 'ADD_NOTE';
// const UPDATE_NOTE = 'UPDATE_NOTE';
// const DELETE_NOTE = 'DELETE_NOTE';

// Action creators
const setNoteA = (payload) => ({
    type: SET_NOTE,
    payload
})

const addNoteA = (payload) => ({
  type: ADD_NOTE,
  payload
})

// Reducer
function notesReducer (state, { type, payload }){
    switch(type){
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, payload]
            }
        case SET_NOTE:
            return {
                ...state,
                notes: [...state.notes, ...payload]
            }
        default:
            return state;
    }
}


const initialState = {
    notes: []
}


export const NotesContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(notesReducer, initialState)


    const setNotes = (payload) => {
        dispatch(setNoteA(payload));
    }

    const addNote = (payload) => {
      dispatch(addNoteA(payload));
    }
    

    useEffect(() => {
        (async () => {
            const response = await getNotes();
            setNotes(response);
        })()
    }, [])
    
    return(
        <NotesContext.Provider value={{...state, addNote}}>
            {children}
        </NotesContext.Provider>
    )
}