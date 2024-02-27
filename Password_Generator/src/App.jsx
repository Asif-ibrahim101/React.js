import React, {useState, useEffect, useCallback} from 'react';
import Footer from './Components/Footer';
import Input from './Components/Input';
import Options from './Components/Options';
import LengthControl from './Components/LengthControl';
// import Button from './Components/Button';
import './App.css';

function App() {
  const [length, setLength] = useState(24);
  const [Uppercase, getUpperCase] = useState(false);
  const [Lowercase, getLowerCase] = useState(false);
  const [Numbers, getNumbers] = useState(false);
  const [Symbols, getSymbol] = useState(false);
  const [password, SetPassword]  = useState('');

  const GeneratePass = useCallback(()=> {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(Numbers) string += "0123456789";
    if(Symbols) string += "!£$%^&*";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    };

    SetPassword(pass);
  }, [length, Uppercase, Lowercase, Numbers, Symbols]);

  return (
    <>
      <div className="main">
        <nav className=" mb-5 py-2 px-8 flex justify-start align-middle bg-[#1d092b]">
          <div className="img w-8 h-8 mr-2">
            <img
              className='w-full'
              src="https://password-gen-pwa.netlify.app/static/media/logo.bd4ad688.png" alt="logo"
            />
          </div>
          
          <div className="heading mt-[0.2rem]">
            <h1 className='text-gray-300 text-md font-medium'>Password Generator</h1>
          </div>
        </nav>

        <div className="flex flex-row justify-between py-4 px-8">
          <div className="flex flex-col">
            <LengthControl length = {length} setLength = {setLength}/>
            <Options 
            Numbers = {Numbers} NumbersFunc = {getNumbers}
            Symbols = {Symbols} SymbolsFunc = {getSymbol}
            LowerCase = {Lowercase} LowerCaseFunc = {()=> getLowerCase}
            UpperCase = {Uppercase} UpperCaseFunc = {()=> getUpperCase}/>
          </div>
          <div className="flex flex-col justify-between">
            <Input password = {password} GeneratePass = {GeneratePass}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App