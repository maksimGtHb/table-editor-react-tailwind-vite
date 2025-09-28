import { createContext, useContext, useState, useEffect } from 'react';
import { useEditing } from './Editing';

const EntryContext = createContext();

export const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [prevEntries, setPrevEntries] = useState([]);
  const { isEditing } = useEditing();
  const [notifications, setNotifications] = useState([]);

  const sampleData = [
    { id: 1, question: 'How the service is provided?', answer: '- answer', letterLength: null, dateUpdated: '2025-04-04T21:00:00.000+00:00' },
    { id: 2, question: 'How to cancel a planned service?', answer: '- answer and more words for answer', letterLength: null, dateUpdated: '1999-12-31T22:00:00.000+00:00' },
    { id: 3, question: 'How long is the service provided?', answer: '- answer', letterLength: null, dateUpdated: '2027-04-04T21:00:00.000+00:00' },
    { id: 4, question: 'What payment methods are available?', answer: '- answer', letterLength: null, dateUpdated: '2028-04-04T21:00:00.000+00:00' },
    { id: 5, question: 'Where to view service prices?', answer: '- answer', letterLength: null, dateUpdated: '2029-04-04T21:00:00.000+00:00' },
    { id: 6, question: 'Which countries support payment?', answer: '- answer', letterLength: null, dateUpdated: '2025-07-28T19:04:12.131+00:00' },
    { id: 7, question: 'Any question else', answer: '- answer', letterLength: null, dateUpdated: '2025-07-28T19:09:52.597+00:00' }
  ];

    const addNotification = (message) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 2000);
  };

  useEffect(() => {
    setEntries(sampleData);
  }, []);


  useEffect(() => {
    if (isEditing) {
      setPrevEntries(JSON.parse(JSON.stringify(entries)));
      addNotification('Switched to editing mode');
    }
  }, [isEditing]);


  const undoChanges = () => {
    setEntries(prevEntries);
    addNotification('Undid changes');
  };

  const saveChanges = () => {
    addNotification('Saved changes');
  };

  return (
    <EntryContext.Provider value={{
      entries,
      setEntries,
      undoChanges,
      saveChanges, 
      addNotification,
      notifications
    }}>
      {children}
    </EntryContext.Provider>
  );
};

export const useEntries = () => useContext(EntryContext);