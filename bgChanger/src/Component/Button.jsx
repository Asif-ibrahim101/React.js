import React from 'react'

function Button({ setBgColor, bgColor }) {

    const ChangerColorBlack = () => {
        setBgColor("black");
    };

    const ChangerColorRed = () => {
        setBgColor("red");
    };

    const ChangerColorWhite = () => {
        setBgColor("white");
    };

    const ChangerColorBlue = () => {
        setBgColor("blue");
    };

    const ChangerColorOlive = () => {
        setBgColor("olive");
    };

    const ChangerColorGray = () => {
        setBgColor("gray");
    };

    const ChangerColorYellow = () => {
        setBgColor("yellow");
    };

    const ChangerColorPink = () => {
        setBgColor("pink");
    };

    const ChangerColorPurple = () => {
        setBgColor("purple");
    };

    const ChangerColorLavender = () => {
        setBgColor("lavender");
    };
    return (
        <>
            <button onClick={ChangerColorBlack} className="bg-black text-white font-bold py-2 px-4 mx-2 rounded-full">
                Black
            </button>
            <button onClick={ChangerColorWhite} className="bg-white text-black font-bold py-2 px-4 mx-2 rounded-full">
                White
            </button>
            <button onClick={ChangerColorRed} className="bg-red-500 text-white font-bold py-2 px-4 mx-2 rounded-full">
                Red
            </button>
            <button onClick={ChangerColorBlue} className="bg-blue-500 text-white font-bold py-2 px-4 mx-2 rounded-full">
                Blue
            </button>
            <button onClick={ChangerColorPink} className="bg-pink-500  text-white font-bold py-2 px-4 mx-2 rounded-full">
                Pink
            </button>
            <button onClick={ChangerColorPurple} className="bg-purple-500 text-white font-bold py-2 px-4 mx-2 rounded-full">
                Purple
            </button>
            <button onClick={ChangerColorOlive} className="bg-[#ADBC9F] text-white font-bold py-2 px-4 mx-2 rounded-full">
                Olive
            </button>
            <button onClick={ChangerColorGray} className="bg-gray-500 text-white font-bold py-2 px-4 mx-2 rounded-full">
                Gray
            </button>
            <button onClick={ChangerColorLavender} className="bg-[#5E1675] text-white font-bold py-2 px-4 mx-2 rounded-full">
                Lavender
            </button>

        </>
    )
}

export default Button