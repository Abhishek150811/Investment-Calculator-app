import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0 ; 
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header></Header>
      <UserInput  userInput={userInput} onChange={handleChange} ></UserInput>
      {!inputIsValid && <p className="center" >Please Enter valid input data</p>}
      {inputIsValid && <Results input={userInput} ></Results>}
    </>
  );
}

export default App;
