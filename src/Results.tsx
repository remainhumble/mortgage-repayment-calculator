import React from "react";
import "./index.css";

type ResultsProps = {
  data: {
    mortgageAmount?: number | "";
    mortgageTerm?: number | "";
    interestRate?: number | "";
    selectedOption?: "repayment" | "interest-only" | "";
  } | null;
};

const Results = ({ data }: ResultsProps) => {
  const hasData = Boolean(
    data &&
    (data.mortgageAmount ||
      data.mortgageTerm ||
      data.interestRate ||
      data.selectedOption),
  );

  return (
    <>
      <div className="results bg-[#122f3f] flex flex-col justify-center items-center max-w-fit lg:rounded-bl-[50px] lg:rounded-br-[25px] lg:rounded-tr-[25px]">
        {!hasData ? (
          <>
            <img
              src="./assets/images/illustration-empty.svg"
              alt="Mortgage Results"
              className="lg:w-64"
            />
            <h2 className="text-white text-2xl font-bold">
              Results shown here
            </h2>
            <p className="text-slate-300 text-sm mt-2 text-center">
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-white text-2xl font-bold">Submitted values</h2>
            <p className="text-white mt-2">
              Mortgage Amount: {data?.mortgageAmount ?? ""}
            </p>
            <p className="text-white mt-1">
              Mortgage Term: {data?.mortgageTerm ?? ""} years
            </p>
            <p className="text-white mt-1">
              Interest Rate: {data?.interestRate ?? ""}%
            </p>
            <p className="text-white mt-1">
              Mortgage Type: {data?.selectedOption ?? ""}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Results;
