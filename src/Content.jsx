
import HWApp from './HWApp';
import EditButton from './EditButton'; 

import {EditingProvider} from './Context/Editing';  
import {useEditing} from './Context/Editing'; 


const Content = () => {

    return(
        <div>
          <EditingProvider> 

        <EditButton />
        <Table/>
       
        <HWApp/>
        </EditingProvider> 
            
        </div>

    );
}



const Table = () => {
  const { isEditing } = useEditing();

  const questions = [
    'How the service is provided?',
    'How to cancel a planned service?',
    'How long is the service provided?',
    'What payment methods are available?',
    'Where to view service prices?'
  ];

  const answers = ['', '', '', '', '']; 

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-white">
        <thead className="text-xs border text-gray-700 uppercase bg-gray-50 dark:bg-slate-800 dark:text-slate-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-base">ID</th>
            <th scope="col" className="px-6 py-3 text-base">Question</th>
            <th scope="col" className="px-6 py-3 text-base">Answer</th>
            <th scope="col" className="px-6 py-3 text-base">Letter length</th>
            <th scope="col" className="px-6 py-3 text-base">Date updated</th>
            <th scope="col" className="px-6 py-3 text-base"></th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((id) => (
            <tr
              key={id}
              className={`odd:bg-slate-500 even:bg-slate-600 text-base
                ${isEditing ? 'hover:bg-green-600 transition-colors duration-100' : 'hover:bg-slate-800 transition-colors duration-300'}
              `}
            >
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-base">
                {id}
              </th>


              <td className="px-6 py-4">
                {isEditing ? (
                  <input
                    type="text"
                    className="bg-slate-700 text-white px-2 py-1 rounded w-full h-10 text-base"
                    defaultValue={questions[id - 1]}
                  />
                ) : (
                  questions[id - 1]
                )}
              </td>


              <td className="px-6 py-4">
                {isEditing ? (
                  <input
                    type="text"
                    className="bg-slate-700 text-white px-2 py-1 rounded w-full h-10 text-base"
                    defaultValue={answers[id - 1]}
                  />
                ) : (
                  answers[id - 1] || "-"
                )}
              </td>

              <td className="px-6 py-4 text-base">-</td>
              <td className="px-6 py-4 text-base">04.05.2025</td>
              <td className="px-6 py-4 text-base text-right">
                <div>
              {isEditing && (
              <button onClick={() => handleRemove(id)} className="cursor-pointer" title="Remove">
              <img src = "/cross-remove.png" className = "w-4 h-4 filter invert"/>
              </button>   
            )}
            </div>
            </td>  
            </tr>  ))}
                {isEditing && (
      <tr className="bg-slate-700    text-4xl cursor-pointer transition-colors duration-600" title="Add new">
        <td colSpan={6} className="text-center py-1">
          <button
            
            title="Add new"
            className="text-white cursor-pointer"
          >
            <img src = "/plus.png" className = "w-5 h-5 filter invert"/>
          </button>
        </td>
      </tr>
    )}
        

        
        </tbody>
      </table>
    </div>
  );
};

export default Content;