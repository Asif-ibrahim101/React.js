import React, { useState, useCallback, useRef } from 'react'

function Input({ password, GeneratePass , copy}) {
    const [Copyed, SetCopyed] = useState(false);
    const passwordRef = useRef(null)

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password)
        SetCopyed((prev) => !prev);
      }, [password])
    return (
        <>
            <div className="password">
                <p className="text-gray-400 py-2">Generated Password</p>
                <input
                    value={password}
                    placeholder='Password will be displayed here'
                    className='flex text-white justify-between bg-[#250d37] w-[30rem] px-6 py-8'
                />

                <div className="first flex flex-col">
                    <button
                        onClick={GeneratePass}
                        className='px-4 py-4 bg-blue-900 text-xl font-semibold rounded-lg text-white'>Generate Password</button>
                    <br />
                    <button
                        onClick={copyPasswordToClipboard}
                        className='px-4 py-4 bg-blue-900 text-xl font-semibold rounded-lg text-white'>
                        {Copyed ? 'Copied' : 'Copy'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Input