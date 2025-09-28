// This component can be used to process real backend data. Right now it uses an example of table data from frontend file
{/*
import {createContext, useContext, useState, useEffect} from 'react'; 
import {useEditing} from '../Context/Editing';

const EntryContext = createContext();

export const EntryProvider = ({children}) => {

    const [entries, setEntries] = useState([]);
    const [prevEntries, setPrevEntries] = useState([]);
    const {isEditing} = useEditing();

    //load
    useEffect(() => {
    fetch('http://localhost:8080/api/questions')
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error('Failed to load questions', err));
  }, []);

    //save previous version
    useEffect(() => {
    if (isEditing) {
      setPrevEntries(JSON.parse(JSON.stringify(entries)));
    }
  }, [isEditing]);
    
    //return previous version
    const undoChanges = () => {
    setEntries(prevEntries);
  };

    //save to db
const saveChanges = () => {
    console.log('Sending data to backend: ', entries)

    fetch('http://localhost:8080/api/questions/replace-all', { 
    method:'POST', 
    headers : {'Content-Type' : 'application/json',},
    body : JSON.stringify(entries)
    })
    .then((res) => res.json())
    .then((data) => {console.log('Saved new data: ', data)})
    .catch((err)=> {console.error('Error: ', err)})
  };


    return (
    <EntryContext.Provider value={{
      entries,
      setEntries,
      undoChanges,
      saveChanges,
      
    }}>
      {children}
    </EntryContext.Provider>
  );
};

export const useEntries = () => useContext(EntryContext);
*/}