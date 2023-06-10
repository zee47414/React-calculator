import Navbar from "./Components/Navbar"
import "./calc.css"
import Buttons from "./Components/Button"

import Result from "./Components/Result"
import { useState } from "react"


function App() {
  // Result state 
  const[result,setresult] = useState(0);
  //handle clickEvents
    const handleclicks = (value)=>{
      switch(value){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".": 
        case "+":
        case "-":
        case "/": 
        case "*":  
        if(result === "0"){
          setresult(value);
        }else{
          setresult(result+value);
        }
        break;
        case "=":
        setresult(eval(result));
        break;
        case "c":
          setresult("");
          break;
        case "+/-":
          setresult(parseInt(result,10)*-1);
          break;
          case "%":
          setresult(parseInt(result,10)/100)
          break;
          default:
          break;
        }
    };
  return (
    <div >
      <Navbar/>
      <div className="Calculator">
      <Result result={result}/>
      <Buttons Buttonclicked={handleclicks} />
      </div>
    </div>
  );
}

export default App;