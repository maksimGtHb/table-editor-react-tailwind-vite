import WindowPoint from './WindowPoint'
import SpecificQuestion from './SpecificQuestion'


const HelpWindow = () => {
  return (
 
  
    <div className="border-4 border-indigo-500 text-black text-xl p-6 rounded-lg pt-6 mt-6 w-160 fixed top-90 right-4 z-10 bg-white" >
    <h1 className="text-center pb-4 text-indigo-900 text-xl font-medium"
    style={{ fontFamily: "'Radio Canada', sans-serif" }}
    >Help window</h1> 
    
       <WindowPoint
        point="How is the service provided?"
        answer="A definite answer"
       />
          <WindowPoint
        point="How to cancel a planned service?"
        answer="A definite answer"
       />
          <WindowPoint
        point="How long is the service provided?"
        answer="A definite answer"
       />
          <WindowPoint
        point="What payment methods are available?"
        answer="A definite answer"
       />
          <WindowPoint
        point="Where to view service prices?"
        answer="A definite answer"
       />
       <SpecificQuestion/>
       
       
    </div>

  );
}

export default HelpWindow;
