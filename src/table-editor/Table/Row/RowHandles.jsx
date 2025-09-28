import { useEntries } from '../../Context/EntryContextTableDataExample';

const rowHandles = {
//edit
 editRow: (index, field, value, setEntries, addNotification) => {
    setEntries(prevEntries => {
      const updated = [...prevEntries];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    addNotification?.(`Edited ${field} in row ${index + 1}`);
  },


  //add 
   addRow: (setEntries, addNotification) => {
      const newEntry = {
        id: Date.now(),
        question: '',
        answer: '',
        dateUpdated: new Date().toISOString(),
      };
      setEntries(prev=> [...prev, newEntry])
      addNotification?.(`Added a new row with ID ${newEntry.id}`);
  },
  
  //remove
 removeRow: (id, setEntries, addNotification) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
    addNotification?.(`Removed row with id ${id}`);
  }
}

export default rowHandles;