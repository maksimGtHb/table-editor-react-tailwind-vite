import React, {createContext, useContext, useState} from 'react';


const Editing = createContext();

export const useEditing = () => useContext(Editing)


export const EditingProvider = ({children}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [originalEntries, setOriginalEntries] = useState([]);



    return (
        <Editing.Provider value = {{isEditing, setIsEditing, originalEntries, setOriginalEntries}}>
            {children}
        </Editing.Provider>
    );
}