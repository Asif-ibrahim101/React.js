import React from 'react'

function LengthControl({ length, setLength }) {
  return (
    <>
      <p className="text-gray-400 py-2">Length : {length}</p>
      <div className='flex flex-col bg-[#250d37] w-[30rem] px-4 py-8'>
        <div>
          <input
            onChange={(e) => {setLength(e.target.value)}}
            className='w-[20rem]' value={length} type="range" max={100} min={1} />
        </div>
      </div>
    </>
  )
}

export default LengthControl