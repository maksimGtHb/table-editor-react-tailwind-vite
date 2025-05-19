import React, {useState} from 'react';
import HelpWindow from './HelpWindow';

const HWApp = () => {

    const [showHW, setShowHW] = useState(false);
    return(
        <div>
            <button type ="button" 

            onClick={() =>setShowHW(!showHW)}

            className={` fixed cursor-pointer  right-4   z-20 transition-all duration-[1000ms] ease-in-out
            ${showHW? 'top-95 text-indigo-600 text-5xl right-9 hover:text-indigo-700'  : 'top-[90%] bg-indigo-400 p-4  text-white hover:bg-indigo-700'}`}>

            {showHW? '-' : 'Questions'}
            </button>

            {showHW && (
                <HelpWindow/>
            )}
            
        </div>

    );
}

export default HWApp;