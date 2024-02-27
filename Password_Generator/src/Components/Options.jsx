import React from 'react'

function Options({Numbers, NumbersFunc, Symbols, SymbolsFunc}) {
  return (
    <>
      <p className="text-gray-400 py-2">Settings</p>

      <div className="number">
        <div className='flex justify-between bg-[#250d37] w-[30rem] px-6 py-8'>
          <div>
            <p className='text-white text-lg'>Include Number</p>
          </div>
          <div>
            <input className='rounded-full' value={Numbers} onChange={()=> {NumbersFunc((prev) => !prev)}} type='checkbox' />
          </div>
        </div>
      </div>
      
      <br />
      <div className="charecters">
        <div className='flex justify-between bg-[#250d37] w-[30rem] px-6 py-8'>
          <div>
            <p className='text-white text-lg'>Include Charecters</p>
          </div>
          <div>
            <input className='rounded-full' value={Symbols} onChange={()=> {SymbolsFunc((prev) => !prev)}} type='checkbox' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Options