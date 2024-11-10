import { useState,useEffect } from 'react';
import './App.css';
import CustomToggle from './CustomToggle';
import Loader from './Loader';
import Rat from './Rat';
function App() {
  // Managing the toggle state for three buttons
  const [toggleStates, setToggleStates] = useState([true, false, true]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 2000); // You can adjust this timer to match your actual loading time

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);
  function handleClick(index) {
    if(index==0){
      if(toggleStates[0]==false){
        setToggleStates([true,true,false])
      }else{
        setToggleStates([false, true, true])
      }
    }else if(index==1){
      if(toggleStates[1]==false){
        setToggleStates([false, true, true])
      }else{
        setToggleStates([true, false, true])
      }
    }else if(index==2){
      if(toggleStates[2]==false){
        setToggleStates([true, false, true])
      }else{
        setToggleStates([true,true,false])
      }
    }
  }

  return (
    
    <>
      {isLoading ? (
        <Loader />    ) : (
          <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Life: Bitter Truth</h1>

        
          <div className="grid gap-6 w-full max-w-2xl">
            {/* Item 1 */}
            <div className={`\ rounded-lg shadow-md p-4 ${toggleStates[0] ? 'bg-green-200' : 'bg-red-200'}`}>
              <div className="grid grid-cols-2 items-center gap-4">
                <button
                  onClick={() => handleClick(0)}
                  
                >
                  <CustomToggle toggle={toggleStates[0]} />
                </button>
                <p className="text-lg font-semibold text-gray-800">Beautiful</p>
              </div>
            </div>
    
            {/* Item 2 */}
            <div className={` rounded-lg shadow-md p-4 ${toggleStates[1] ? 'bg-green-200' : 'bg-red-200'}`}>
              <div className="grid grid-cols-2 items-center gap-4">
                <button
                  onClick={() => handleClick(1)}
                 
                >
                  <CustomToggle toggle={toggleStates[1]} />
                </button>
                <p className="text-lg font-semibold text-gray-800">Dahej</p>
              </div>
            </div>
    
            {/* Item 3 */}
            <div className={` rounded-lg shadow-md p-4 ${toggleStates[2] ? 'bg-green-200' : 'bg-red-200'}`}>
              <div className="grid grid-cols-2 items-center gap-4">
                <button
                  onClick={() => handleClick(2)}
                 
                >
                  <CustomToggle toggle={toggleStates[2]} />
                </button>
                <p className="text-lg font-semibold text-gray-800">Seal Packed</p>
              </div>
            </div>
          </div>
          </div>
      )}

      
    </>
  );
}

export default App;