import React from 'react'
import './index.css';

const Results = () => {
    return (
        <>
            <div className="bg-[#122f3f] fixed bottom-0 flex flex-col items-center p-2.5 left-0 w-full">
                <img src="assets/images/illustration-empty.svg" alt="Mortgage Results" />
                <h2 className='text-white text-2xl font-bold'>Results shown here</h2>
                <p className='text-slate-300 text-sm mt-2'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
            </div>
        </>
    )
}

export default Results
