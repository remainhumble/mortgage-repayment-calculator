
import './index.css';

const Calculator = () => {
    return (
        <>
            <div className='calculator bg-white rounded-bl-[25px] rounded-tl-[25px]'>
                <h1 className='text-3xl font-bold'>Mortgage Calculator</h1>
                <p className='cursor-pointer'><u>Clear All</u></p>
                <div className='inputs'>
                    <label for="mortgage-amount">Mortgage Amount</label><br></br>
                    <div className="left-addon">
                        <div className='addon'>£</div>
                        <input type="number" id="mortgage-amount" className='number-input' /><br></br>
                    </div>
                    <br />
                    <label for="mortgage-term">Mortgage Term</label><br></br>
                    <div className="right-addon">
                        <input type="number" id="mortgage-term" className='number-input' />
                        <div className='addon'>years</div>
                    </div>
                    <br></br>
                    <label for="interest-rate">Interest Rate</label><br></br>
                    <div className="right-addon">
                        <input type="number" id="interest-rate" className='number-input' />
                        <div className='addon'>%</div>
                    </div>
                    <br></br>

                    <fieldset className='mortgage-type flex flex-col gap-2.5'>
                        <legend for="mortgage-type">Mortgage Type</legend><br></br>
                        <label className='radio font-bold'>
                            <input type="radio" name="mortgage-type" value="repayment" id="repayment" />
                            Repayment
                        </label>
                        <label className='radio font-bold'>
                            <input type="radio" name="mortgage-type" value="interest-only" id="interest-only" />
                            Interest Only
                        </label>
                    </fieldset>
                    <div className='flex gap-2.5 mt-5'>
                        <button className='cursor-pointer flex calculate-btn font-bold justify-center'><img src="./assets/images/icon-calculator.svg" alt="Calculate" />Calculate Repayments</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator
