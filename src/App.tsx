import React, { useState } from "react";
import Calculator from "./Calculator";
import Results from "./Results";

type FormValues = {
  mortgageAmount?: number | "";
  mortgageTerm?: number | "";
  interestRate?: number | "";
  selectedOption?: "repayment" | "interest-only" | "";
};

type CalculationResult = {
  monthly: number;
  total: number;
  interest: number;
};

const calculateMortgage = (data: FormValues): CalculationResult | null => {
  const P = Number(data.mortgageAmount || 0);
  const years = Number(data.mortgageTerm || 0);
  const annual = Number(data.interestRate || 0);
  const option = data.selectedOption;

  if (!P || !years || !option) return null;

  const n = years * 12;
  const r = annual / 100 / 12;

  let monthly = 0;

  if (option === "interest-only") {
    monthly = P * r;
  } else {
    if (r === 0) {
      monthly = P / n;
    } else {
      const factor = Math.pow(1 + r, n);
      monthly = (P * r * factor) / (factor - 1);
    }
  }

  const total = monthly * n;
  const interest = total - P;

  return { monthly, total, interest };
};

const App = () => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [calculation, setCalculation] = useState<CalculationResult | null>(
    null,
  );

  const handleCalculate = (data: FormValues) => {
    setSubmittedData(data);
    setCalculation(calculateMortgage(data));
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:scale-[0.7]">
        <Calculator onCalculate={handleCalculate} />
        <Results data={submittedData} result={calculation} />
      </div>
    </>
  );
};

export default App;
