
const ActionCell = ({imgSrc, title, onClick}) => {
  return (
    <td className="px-6 py-4 text-base text-right">
         {imgSrc? (
          <button className="cursor-pointer" title={title} onClick={onClick}>
          <img src={imgSrc} alt={title} className="w-4 h-4 filter invert" />
        </button>) 
        : null}
    </td>
  );
};

export default ActionCell;