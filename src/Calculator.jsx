
import './index.css';

const Calculator = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold'>Mortgage Calculator</h1>
            <p><u>Clear All</u></p>

            <label for="mortgage-amount">Mortgage Amount</label><br></br>
            <div className="left-addon">
                <div className='addon'>£</div>
                <input type="number" id="mortgage-amount" className='number-input' /><br></br>
            </div>

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
            <div className='mortgage-type'>
                <label for="mortgage-type">Mortgage Type</label><br></br>
                <div className='radio'>
                    <input type="radio" name="mortgage-type" value="repayment" />
                    <label for="repayment" className='font-bold'>Repayment</label><br></br>
                </div>
                <div className='radio'>
                    <input type="radio" name="mortgage-type" value="interest-only" />
                    <label for="interest-only" className='font-bold'>Interest Only</label><br></br>
                </div>
            </div>
            <button className='flex calculate-btn font-bold'><img src="./assets/images/icon-calculator.svg" alt="Calculate" />Calculate Repayments</button>
        </div>
    )
}

export default Calculator
