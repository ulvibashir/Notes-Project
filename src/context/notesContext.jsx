import React, { createContext, useReducer } from 'react'
import uuid from "react-uuid";  // for unique id 
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
            color: "#d32727",
            isCompleted: true
        },
        {
            id: uuid(),
            title: "Hello Jupiter",
            text: "This is Corona",
            date: Date.now(),
            color: "#3a2c84",
            isCompleted: false
        },
        {
            id: uuid(),
            title: "Hello Uganda",
            text: "This is Uganda",
            date: Date.now(),
            color: "#ef8e0b",
            isCompleted: true
        },
        {
            id: uuid(),
            title: "Hello Mozambik",
            text: "This is Mozambik bratan",
            date: Date.now(),
            color: "#516f55",
            isCompleted: false
        }
        
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