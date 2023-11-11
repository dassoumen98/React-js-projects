import React, { useEffect } from "react";
import "./index.css";
import { useCallback, useState, useRef } from "react";

const App = () => {
  let [length, setLenth] = useState("8");
  let [password, setPassword] = useState("");
  let [number, setNumber] = useState(false);
  let [chracter, setChracter] = useState(false);
  let copyRef = useRef(null);

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let char = "!@#$%^&*()_+~*/-=";

    if (number) str += "1234567890";
    if (chracter) str += char;

    for (let i = 0; i < length; i++) {
      let val = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(val);
    }

    setPassword(pass);
  }, [length, number, chracter, setPassword]);

  let copyToClipBoard = useCallback(()=>{
    copyRef.current?.select();
    window.navigator.clipboard.writeText(password)
  } , [password]) 

  useEffect(() => {
    passwordGenerator();
  }, [length, number, chracter, passwordGenerator]);





  return (
    <div className="bg-slate-800 m-0 p-0 box-border w-screen h-screen flex ">
      <div className=" h-60 bg-slate-400 w-[500px]  rounded-sm m-auto  flex flex-col items-center p-3 justify-center gap-3  ">
        <div className=" flex  ">
          <input
            value={password}
            type="text"
            className="py-1 px-6 rounded-sm outline-purple-500  outline-1"
            ref={copyRef}
          />
          <button 
          onClick={copyToClipBoard}
          className=" bg-purple-600 text-white py-2 px-3 rounded-sm mx-1 hover:bg-purple-700">
            Copy
          </button>
        </div>

        <div className="flex  gap-3">
          <input
            type="range"
            onClick={(e) => {
              setLenth(e.target.value);
            }}
          />
          <label className=" text-purple-800 ">length:{length}</label>

          <input
            type="checkbox"
            defaultChecked={number}
            onClick={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="">Number</label>

          <input
            type="checkbox"
            defaultChecked={chracter}
            onClick={() => setChracter((prev) => !prev)}
          />
          <label htmlFor="">chracter</label>
        </div>
      </div>
    </div>
  );
};

export default App;
