import React from 'react'
import './index.css';

const Results = () => {
    return (
        <>
            <div className="bg-[#122f3f] flex flex-col justify-center items-center max-w-fit rounded-bl-[50px]  rounded-br-[25px]  rounded-tr-[25px] ">
                <img src="./assets/images/illustration-empty.svg" alt="Mortgage Results" className='w-64' />
                <h2 className='text-white text-2xl font-bold'>Results shown here</h2>
                <p className='text-slate-300 text-sm mt-2 text-center'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
            </div>
        </>
    )
}

export default Results
