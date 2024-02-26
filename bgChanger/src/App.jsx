import React, {useState} from 'react';
import Button from './Component/Button';

function App() {
  const [bgColor, setBgColor] = useState("white");
  return (
    <>
        <div style={{backgroundColor: bgColor, height: '100vh'}} className="main relative duration-200">
          <div className=" fixed flex flex-wrap justify-center bottom-10 inset-x-0">
            <div className='bg-[#c0c2ca] py-2 px-4 rounded-full shadow-xl'>
              <Button bgColor = {bgColor} setBgColor= {setBgColor}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default App;