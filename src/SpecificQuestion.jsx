import React from 'react';

const SpecificQuestion = () => {
    return (
        <div className="pt-2 flex flex-col items-center">
        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white bg-indigo-300 border border-gray-200 hover:bg-indigo-400 cursor-pointer">
        Specific question</button>
       <p className="text-sm">*Send your question if you haven't found an answer</p>
       </div>


    );
}

export default SpecificQuestion;