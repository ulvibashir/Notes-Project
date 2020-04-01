import React, { createContext, useReducer, useEffect } from 'react'
import uuid from "react-uuid";  // for unique id 

import { getNotes } from '../API/fetchAPI';

export const NotesContext = createContext();


// Action type
const SET_NOTE = 'SET_NOTE';
const ADD_NOTE = 'ADD_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

// Action creators
const setNoteA = (payload) => ({
    type: SET_NOTE,
    payload
})

// Reducer
function notesReducer (state, { type, payload }){
    switch(type){
        case SET_NOTE:
            return {
                ...state,
                notes: [...state.notes, ...payload]
            }
        default:
            return state;
    }
}




// const initialState = {
//     notes: [
//         {
//             id: uuid(),
//             title: "Hello Mars",
//             text: "This is Sparta",
//             date: Date.now(),
//             color: "#d32727",
//             isCompleted: true
//         },
//         {
//             id: uuid(),
//             title: "Hello Jupiter",
//             text: "This is Corona",
//             date: Date.now(),
//             color: "#3a2c84",
//             isCompleted: false
//         },
//         {
//             id: uuid(),
//             title: "Hello Uganda",
//             text: "This is Uganda",
//             date: Date.now(),
//             color: "#ef8e0b",
//             isCompleted: true
//         },
//         {
//             id: uuid(),
//             title: "Hello Mozambik",
//             text: "This is Mozambik bratan",
//             date: Date.now(),
//             color: "#516f55",
//             isCompleted: false
//         }
        
//     ]
// }


const initialState = {
    notes: []
}


export const NotesContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(notesReducer, initialState)


    const setNotes = (payload) => {
        dispatch(setNoteA(payload));
    }


    

    useEffect(() => {
        (async () => {
            const response = await getNotes();
            setNotes(response);
        })()
    }, [])
    
    return(
        <NotesContext.Provider value={{...state}}>
            {children}
        </NotesContext.Provider>
    )
}