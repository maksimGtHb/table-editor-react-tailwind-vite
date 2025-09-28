

const EditableCell = ({ value, onChange, isEditing }) => {
  return (
    <td className="px-6 py-4">
        {isEditing ? (
          <input
          type="text"
          className="bg-slate-700 text-white px-2 py-1 rounded w-full h-10 text-base"
          value = {value}
          onChange={onChange}
          />) 
          : (value
            )}
    </td>
  );
};

export default EditableCell;