

const Header = () => {
    return (

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
 
    );
}

export default Header;