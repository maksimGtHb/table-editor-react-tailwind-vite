import React from 'react';

const Documentation = () => {
    return(
        <div className="p-6 bg-slate-700 text-white max-w-6xl mx-auto rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Table Editor App</h1>
      <p className="mb-4">
        A <strong>dynamic and user-friendly table editor built with React</strong>, designed for managing rows. 
        This app combines <strong>inline editing, row management, notifications, and version control</strong> in a seamless way. 
        It is suitable for managing key information stored in a table format.
      </p>
      <p className="mb-6">⚠️ This version is for testing and viewing only. 🚀</p>

      <h2 className="text-2xl font-semibold mb-2">Features</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>✏️ Edit rows directly in the table</li>
        <li>➕ Easily insert new entries or delete existing ones</li>
        <li>🔄 Revert edits to the last saved version of the table</li>
        <li>🔔 Every action (edit, add, remove, save, undo) triggers a toast notification at the top of the screen</li>
        <li>🎨 Modern styling with hover effects, alternating row colors, and intuitive controls</li>
        <li>🔑 Switch between read-only and editing modes seamlessly</li>
        <li>🧩 Rows are constructed from React components: <code>EditableCell</code>, <code>NotEditableCell</code>, <code>ActionCell</code></li>
        <li>📄 Table data is imported from a sample file inside the project</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Tech Stack 🛠️</h2>
      <ul className="list-disc list-inside mb-6">
        <li>React with Context API</li>
        <li>TailwindCSS for styling</li>
        <li>Day.js for date formatting</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Installation</h2>
      <p className="mb-2"><strong>Prerequisites:</strong> Node.js more or equal 16, npm (comes with Node.js)</p>

      <h3 className="text-xl font-semibold mb-1">Run the App Locally 🖥️</h3>
      <ol className="list-decimal list-inside mb-6 space-y-1">
        <li>
          <strong>Clone the Repository:</strong> <code>git clone https://gitlab.com/your-username/your-repo.git</code>
        </li>
        <li>
          <strong>Go to the Project Folder:</strong> <code>cd your-repo</code>
        </li>
        <li>
          <strong>Install Dependencies:</strong> <code>npm install</code>
        </li>
        <li>
          <strong>Run the App:</strong> <code>npm start</code> – Opens at <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">Usage</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Click <strong>Edit</strong> to enable editing mode</li>
        <li>Modify table cells directly in the browser</li>
        <li>Add a new row using the <strong>plus button</strong></li>
        <li>Remove a row using the <strong>remove button</strong></li>
        <li>Undo changes using the <strong>Undo button</strong></li>
        <li>Notifications appear at the top for each action</li>
      </ul>
    </div>

    );
}

export default Documentation;
