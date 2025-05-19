import React, {useState} from 'react';
import ChevronDown from './chevron-down'

const WindowPoint = ({point, answer}) =>{
    const [show, setShow] = useState(false);

    return(
        <div className="border-2 hover:bg-indigo-300 border-indigo-300 p-2 cursor-pointer mb-2"
        onClick={() => setShow(!show)}
        >

        <div className = "flex justify-between items-center">
            {point}
            <ChevronDown/>
        </div>

  
        {show &&     <p
        className={`mt-2 text-base transition-all duration-500 ease-in-out transform ${
          show ? 'opacity-100 translate-y-0 max-h-40' : 'opacity-0 -translate-y-1 max-h-0'
        } overflow-hidden`}
      >- {answer}</p>}

        </div>
        
    );

}

export default WindowPoint;