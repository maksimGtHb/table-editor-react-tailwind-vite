import React, {createContext, useContext, useState} from 'react';


const Editing = createContext();

export const useEditing = () => useContext(Editing)


export const EditingProvider = ({children}) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <Editing.Provider value = {{isEditing, setIsEditing}}>
            {children}
        </Editing.Provider>
    );
}