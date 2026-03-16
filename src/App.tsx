import React, { useState } from "react";
import Calculator from "./Calculator";
import Results from "./Results";

type FormValues = {
  mortgageAmount?: number | "";
  mortgageTerm?: number | "";
  interestRate?: number | "";
  selectedOption?: "repayment" | "interest-only" | "";
};

const App = () => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const handleCalculate = (data: FormValues) => {
    setSubmittedData(data);
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:scale-[0.7]">
        <Calculator onCalculate={handleCalculate} />
        <Results data={submittedData} />
      </div>
    </>
  );
};

export default App;
