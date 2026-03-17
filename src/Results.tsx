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
      <div className="results bg-[#122f3f] lg:rounded-bl-[50px] lg:rounded-br-[25px] lg:rounded-tr-[25px]">
        {!hasData ? (
          <div className="flex flex-col justify-center items-center h-full">
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
          </div>
        ) : (
          <div>
            <h2 className="text-white text-2xl font-bold">Your results</h2>
            <p className="text-slate-300 text-sm mt-2">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              "calculate repayments" again.
            </p>
            <br />
            <div className="your-results bg-slate-900 rounded-lg border-t-5 border-(--lime) border-solid">
              <h6 className="text-slate-300">Your monthly repayments</h6>
              <div className="monthly">
                <span className="text-(--lime) text-6xl font-bold">
                  {/* Placeholder for calculated monthly repayments */}
                  £X,XXX.XX
                </span>
              </div>
              <hr />
              <div className="total">
                <h6 className="text-slate-300 mt-4">
                  Total you'll repay over the term.
                </h6>
                <span className="text-white text-2xl font-bold">
                  {/* Placeholder for total repayment */}
                  £XXX,XXX.XX
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
