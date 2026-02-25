import React from 'react'
import './index.css';

const Results = () => {
    return (
        <>
            <div className="results bg-[#122f3f] flex flex-col justify-center items-center max-w-fit lg:rounded-bl-[50px] lg:rounded-br-[25px] lg:rounded-tr-[25px] ">
                <img src="./assets/images/illustration-empty.svg" alt="Mortgage Results" className='lg:w-64' />
                <h2 className='text-white text-2xl font-bold'>Results shown here</h2>
                <p className='text-slate-300 text-sm mt-2 text-center'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
            </div>
        </>
    )
}

export default Results
