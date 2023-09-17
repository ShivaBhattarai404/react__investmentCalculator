import React, { useState } from "react";

import Header from "./components/Header/Header";
import InputForm from "./components/Form/InputForm";
import Table from "./components/Table/Table";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const resultData = [];
  if (userInput) {
    let principal = +userInput.principal;
    const yearlyDeposit = +userInput.yearly;
    const interestRate = +userInput.interestRate;
    const time = +userInput.time;

    let yearEndAmount = principal;
    for (let i = 0; i < time; i++) {
      let interestAmount = (interestRate * yearEndAmount) / 100;
      yearEndAmount += yearlyDeposit + interestAmount;
      principal += yearlyDeposit;

      resultData.push({
        year: i + 1,
        amount: yearEndAmount.toFixed(2),
        interstThisYear: interestAmount.toFixed(2),
        totalInterest: (yearEndAmount - principal).toFixed(2),
        principal: principal,
      });
    }
  }

  const resetData = () => setUserInput(null);

  return (
    <div>
      <Header />
      <InputForm onAdd={calculateHandler} reset={resetData} />

      {!userInput && <h2>No Content Found</h2>}
      {userInput && <Table content={resultData} />}
    </div>
  );
}

// function App() {
//   const [yearlyData, setyearlyData] = useState([]);

//   const calculateHandler = (userInput) => {
//     let principal = +userInput.principal;
//     const yearlyDeposit = +userInput.yearly;
//     const interestRate = +userInput.interestRate;
//     const time = +userInput.time;

//     let yearEndAmount = principal;
//     let calculatedData = [];
//     for (let i = 0; i < time; i++) {
//       let interestAmount = (interestRate * yearEndAmount) / 100;
//       yearEndAmount += yearlyDeposit + interestAmount;
//       principal += yearlyDeposit;

//       calculatedData.push({
//         year: i + 1,
//         amount: yearEndAmount.toFixed(2),
//         interstThisYear: interestAmount.toFixed(2),
//         totalInterest: (yearEndAmount - principal).toFixed(2),
//         principal: principal,
//       });
//     }
//     setyearlyData(calculatedData);
//   };

//   const resetData = () => setyearlyData([]);

//   return (
//     <div>
//       <Header />
//       <InputForm onAdd={calculateHandler} reset={resetData} />
//       <Table content={yearlyData} />
//     </div>
//   );
// }

export default App;
