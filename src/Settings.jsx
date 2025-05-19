import React from 'react';
import HWApp from './HWApp';




const ParameterText = ({param, value}) => {
    return (
        <div className="flex pt-10 pl-10">
            <p className=" text-2xl pr-10">{param}</p>
            <input value={value}
            className="border border-indigo-700 text-2xl" 
            />
        </div>

    );
}


const Parameter = ({param}) => {
    return (
        <div className="flex pt-10 pl-10">
            <p className=" text-2xl pr-10">{param}</p>
           
        </div>

    );
}

const Property = ({property}) =>{
    return (
    <div className="border border-indigo-700 text-2xl p-4 hover:bg-green-300 cursor-pointer mr-4">
    {property}
   </div>
    );
}


const ParameterContainer = ({children}) =>{
    return (
    <div className=" border border-indigo-700 text-2xl p-3 flex w-2xl bg-indigo-500">
        {children}
   </div>
    );
}




const Settings = () =>{
    return(

        <div>


      <ParameterText
      param ="URL to post"
      value=""
      />

    <ParameterText
      param ="Mail for receiving"
      value=""
      />



      <ParameterContainer>
      <Parameter
      param = "Size"
      />
      <Property
      property="2"
      />
     <Property
      property="3"
      />
       <Property
      property="4"
      />
         <Property
      property="5"
      />

      </ParameterContainer>

      <ParameterContainer>
      <Parameter
      param = "Placement"
      />
       <Property
      property="&#x2199; Lower left"
      />
         <Property
      property="&#8600; Lower right"
      />
            <Property
      property="&#8598; Upper left"
      />
     <Property
      property="&#8599; Upper right"
      />

      </ParameterContainer>

      <ParameterContainer>
      <Parameter
      param = "Theme"
      />
       <Property
      property="Indigo"
      />
         <Property
      property="Dark"
      />
            <Property
      property="Bright"
      />
     <Property
      property="Transparent"
      />

      </ParameterContainer>
        <a>Backup of questions</a>

       <HWApp/>


      </div>
 

    );
}

export default Settings;