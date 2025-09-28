import Header from './Header/Header';
import Rows from './Row/Rows';
import {EditingProvider} from '../Context/Editing';  
import {useEditing} from '../Context/Editing'; 
import {EntryProvider} from '../Context/EntryContextTableDataExample';
import EditButton from '../Buttons/EditButton'; 
import UndoButton from '../Buttons/UndoButton';
import Notifications from '../Notifications/Notifications';


const TableEditorWindow = () => {
    return (
        <EditingProvider>
        <EntryProvider>

        <EditButton/>
        <EntireTable/>

        <ConditionalUndoButton/>
        <Notifications/>
   

        </EntryProvider>
        </EditingProvider>

    );
}

const EntireTable =() => {
    return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-white">
      <Header/>
       <Rows/>
        </table>
     </div>
    </div>
    );
};

const ConditionalUndoButton =() =>{
  const {isEditing} = useEditing();
  return isEditing ? <UndoButton/> : null;
}

export default TableEditorWindow; 