import NotEditableCell from './Cell/NotEditableCell';
import EditableCell from './Cell/EditableCell';
import ActionCell from './Cell/ActionCell';
import {useEditing} from '../../Context/Editing';
import dayjs from 'dayjs';
import rowHandles from './RowHandles';
import {useEntries} from '../../Context/EntryContextTableDataExample';

const Rows = () => {

  const {isEditing} = useEditing();
  const {entries, setEntries, addNotification} = useEntries();

  
const AddNewRowButton = () => {
    return (
        <tr className="bg-slate-700    text-4xl cursor-pointer hover:bg-slate-600" title="Add new">
          <td colSpan={6} className="text-center py-3">
          <div className="flex items-center justify-center h-full p-2" onClick = {() => rowHandles.addRow(setEntries, addNotification)}>
          <button title="Add new" className="text-white cursor-pointer" >
          <img src="/plus.png" className="w-5 h-5 filter invert" />
      </button>
    </div>
        </td>
      </tr>
    );
}

    return (
      <> 
      {entries.map((entry, index) => (
     
        <tr
            key = {entry.id}
            className={`odd:bg-slate-500 even:bg-slate-600 text-base
            ${isEditing ? 'hover:bg-green-600 transition-colors duration-100' 
            : 'hover:bg-slate-800 transition-colors duration-300'
            }`}
        >
           <NotEditableCell>{entry.id}</NotEditableCell>

          <EditableCell
          value={entry.question}
          onChange={(e) => rowHandles.editRow(index, 'question', e.target.value, setEntries, addNotification)}
          isEditing={isEditing} 
          />

          <EditableCell
          value={entry.answer}
          onChange={(e) => rowHandles.editRow(index, 'answer', e.target.value, setEntries, addNotification)}
          isEditing={isEditing} 
          />
           <NotEditableCell>{entry.answer ? entry.answer.length : 0} </NotEditableCell>
           <NotEditableCell>{dayjs(entry.dateUpdated).format('DD.MM.YYYY HH:mm')}</NotEditableCell>
           
           {isEditing ? (
           <ActionCell imgSrc = "/cross-remove.png" title="Remove" onClick={()=> rowHandles.removeRow(entry.id, setEntries, addNotification)}/>
           ):
           <ActionCell />}
       
    </tr>
    
     ))}
     {isEditing && 
         <AddNewRowButton/>
     }
  </>
    );
}

export default Rows;  

