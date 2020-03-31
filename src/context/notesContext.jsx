import React, { createContext, useReducer } from 'react'
import uuid from 'uuid/v4'
export const NotesContext = createContext();


// Action type
const ADD_NOTE = 'ADD_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

function notesReducer (state, { type, payload }){
    switch(type){
        default:
            return state;
    }
}





const initialState = {
    notes: [
        {
            id: uuid(),
            title: "Hello Mars",
            text: "This is Sparta",
            date: Date.now(),
            checked: false,
            color: "#d32727"
        },
        {
            id: uuid(),
            title: "Hello Jupiter",
            text: "This is Julyen",
            date: Date.now(),
            checked: false,
            color: "#d32727"
        },
        {
            id: uuid(),
            title: "Hello Uganda",
            text: "This is Uganda",
            date: Date.now(),
            checked: false,
            color: "#d32727"
        },
        {
            id: uuid(),
            title: "Hello Mozambik",
            text: "This is Mozambik bratan",
            date: Date.now(),
            checked: false,
            color: "#d32727"
        },
        {
            id: uuid(),
            title: "Hello Mars",
            text: "This is Sparta",
            date: Date.now(),
            checked: false,
            color: "#d32727"
        },
    ]
}




export const NotesContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(notesReducer, initialState)
    return(
        <NotesContext.Provider value={{...state}}>
            {children}
        </NotesContext.Provider>
    )
}