import { useForm } from "react-hook-form"; // developers should ensure they are familiar with React Hooks and the library's API to maximize its benefits
import "./index.css";

const Calculator = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { example: "test" },
  });

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <form
        className="calculator bg-white lg:rounded-bl-[25px] lg:rounded-tl-[25px] w-full"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
        <p className="cursor-pointer">
          <u>Clear All</u>
        </p>
        <div className="inputs">
          <label htmlFor="mortgage-amount">Mortgage Amount</label>
          <br></br>
          <div className="left-addon">
            <div className="addon">£</div>
            <input
              type="number"
              id="mortgage-amount"
              className="number-input"
            />
            <br></br>
          </div>
          <br />
          <label htmlFor="mortgage-term">Mortgage Term</label>
          <br></br>
          <div className="right-addon">
            <input type="number" id="mortgage-term" className="number-input" />
            <div className="addon">years</div>
          </div>
          <br></br>
          <label htmlFor="interest-rate">Interest Rate</label>
          <br></br>
          <div className="right-addon">
            <input type="number" id="interest-rate" className="number-input" />
            <div className="addon">%</div>
          </div>
          <br></br>

          <fieldset className="mortgage-type flex flex-col gap-2.5">
            <legend>Mortgage Type</legend>
            <label className="radio font-bold">
              <input
                type="radio"
                name="mortgage-type"
                value="repayment"
                id="repayment"
              />
              Repayment
            </label>
            <label className="radio font-bold">
              <input
                type="radio"
                name="mortgage-type"
                value="interest-only"
                id="interest-only"
              />
              Interest Only
            </label>
          </fieldset>
          <div className="flex gap-2.5 mt-5">
            <button className="cursor-pointer flex calculate-btn font-bold justify-center w-full lg:w-auto">
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
