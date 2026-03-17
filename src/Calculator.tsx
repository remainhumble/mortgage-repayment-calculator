import React, { useState } from "react";
import { useForm } from "react-hook-form"; // developers should ensure they are familiar with React Hooks and the library's API to maximize its benefits
import "./index.css";

type FormValues = {
  mortgageAmount: number | "";
  mortgageTerm: number | "";
  interestRate: number | "";
  selectedOption: "repayment" | "interest-only" | "";
};

interface CalculatorProps {
  onCalculate: (data: FormValues) => void;
}

const Calculator = ({ onCalculate }: CalculatorProps) => {
  const [selectedOption, setSelectedOption] = useState<
    "repayment" | "interest-only" | ""
  >(""); // Track selected value

  // Handle radio change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as "repayment" | "interest-only");
  };

  const onSubmit = (data: FormValues) => {
    onCalculate(data);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      selectedOption: "",
    },
  });

  const handleClear = () => {
    setSelectedOption("");
    reset({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      selectedOption: "",
    });
  };

  return (
    <>
      <form
        className="calculator bg-white lg:rounded-bl-[25px] lg:rounded-tl-[25px] w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="header lg:flex items-center justify-between mb-5">
          <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleClear}
          >
            <u>Clear All</u>
          </button>
        </div>
        <div className="inputs">
          <label htmlFor="mortgage-amount">Mortgage Amount</label>
          <br></br>
          <div
            className={`left-addon ${errors.mortgageAmount ? "border-[#d73328]" : "border-slate-700"}`}
          >
            <div
              className={`addon pound ${errors.mortgageAmount ? "bg-[#d73328] text-white" : "bg-slate-100 text-slate-700"}`}
            >
              £
            </div>
            <input
              type="number"
              step="0.01"
              id="mortgage-amount"
              className={`number-input ${
                errors.mortgageAmount
                  ? "border-[1.5px] border-solid border-[hsl(4,69%,50%)] rounded-[0_6px_6px_0]"
                  : ""
              }`}
              {...register("mortgageAmount", {
                required: "This field is required",
              })}
            />
            <br></br>
          </div>
          {errors.mortgageAmount && (
            <p style={{ color: "#d73328" }}>
              {JSON.stringify(errors.mortgageAmount.message)}
            </p>
          )}
          <br />
          <div className="lg:flex gap-5">
            <div className="w-full">
              <label htmlFor="mortgage-term">Mortgage Term</label>
              <br></br>
              <div className="right-addon">
                <input
                  type="number"
                  id="mortgage-term"
                  className={`number-input ${
                    errors.mortgageTerm
                      ? "border-[1.5px] border-solid border-[hsl(4,69%,50%)] rounded-[6px_0_0_6px]"
                      : ""
                  }`}
                  {...register("mortgageTerm", {
                    required: "This field is required",
                  })}
                />

                <div
                  className={`addon years ${errors.mortgageTerm ? "bg-[#d73328] text-white" : "bg-slate-100"}`}
                >
                  years
                </div>
              </div>
              {errors.mortgageTerm && (
                <p style={{ color: "#d73328" }}>
                  {JSON.stringify(errors.mortgageTerm.message)}
                </p>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="interest-rate">Interest Rate</label>
              <br></br>
              <div className="right-addon">
                <input
                  type="number"
                  step="0.01"
                  id="interest-rate"
                  className={`number-input ${
                    errors.interestRate
                      ? "border-[1.5px] border-solid border-[hsl(4,69%,50%)]  rounded-[6px_0_0_6px]"
                      : ""
                  }`}
                  {...register("interestRate", {
                    required: "This field is required",
                  })}
                />
                <div
                  className={`addon percent ${errors.interestRate ? "bg-[#d73328]	text-white" : "bg-slate-100"}`}
                >
                  %
                </div>
              </div>
              {errors.interestRate && (
                <p style={{ color: "#d73328" }}>
                  {JSON.stringify(errors.interestRate.message)}
                </p>
              )}
            </div>
            <br></br>
          </div>
          <fieldset className="mortgage-type flex flex-col gap-2.5">
            <legend>Mortgage Type</legend>
            <label className="radio font-bold">
              <input
                type="radio"
                value="repayment"
                id="repayment"
                checked={selectedOption === "repayment"}
                {...register("selectedOption", {
                  required: "This field is required",
                })}
                onChange={(event) => {
                  handleChange(event);
                }}
              />
              Repayment
            </label>
            <label className="radio font-bold">
              <input
                type="radio"
                value="interest-only"
                id="interest-only"
                checked={selectedOption === "interest-only"}
                {...register("selectedOption", {
                  required: "This field is required",
                })}
                onChange={(event) => {
                  handleChange(event);
                }}
              />
              Interest Only
            </label>
            {errors.selectedOption && (
              <p style={{ color: "#d73328" }}>
                {String(errors.selectedOption.message)}
              </p>
            )}
          </fieldset>

          <div className="flex gap-2.5 mt-5">
            <button
              className="cursor-pointer flex calculate-btn font-bold justify-center w-full lg:w-auto"
              type="submit"
            >
              <img src="./assets/images/icon-calculator.svg" alt="Calculate" />
              Calculate Repayments
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Calculator;
