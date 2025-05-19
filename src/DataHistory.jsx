
const DataTable = () => {
  const questions = [
    'How the service is provided?',
    'How to cancel a planned service?',
    'How long is the service provided?',
    'What payment methods are available?',
    'Where to view service prices?'
  ];

  const answers = ['A definite answer', '-', '-', '-', '-']; 

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left rtl:text-right text-white">
  <thead className="text-xs border text-gray-700 bg-gray-50 dark:bg-slate-800 dark:text-slate-300">
    <tr>
      <th scope="col" className="px-6 py-3 text-base">ID</th>
      <th scope="col" className="px-6 py-3 text-base">Question</th>
      <th scope="col" className="px-6 py-3 text-base">Answer</th>
      <th scope="col" className="px-6 py-3 text-base">Date updated</th>
    </tr>
  </thead>
  <tbody>
    {[1, 2, 3, 4, 5].map((id) => (
      <tr
        key={id}
        className="bg-slate-700 text-base whitespace-nowrap hover:bg-slate-900 transition-colors duration-100"
      >
        <td className="px-6 py-4">
          {id}
        </td>
        <td className="px-6 py-4">
          {questions[id - 1]}
        </td>
        <td className="px-6 py-4">
          {answers[id - 1]}
        </td>
        <td className="">
          04.05.2025
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

const DataHistory = () => {
  return (
    <div className="">
      <h2 className="text-2xl text-center pt-10 pb-4">History of questions</h2>
       
      <DataTable />
      
    </div>
  );
};

export default DataHistory;