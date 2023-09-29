import React from 'react'
import ResultInput from './ResultInput';
import ResultData from './ResultData';


function StudentResult() {
   
    return (
        <div>
            <div className="container">
                <h1 className='text-center text-decoration-underline mb-5'>Student Result</h1>

                <ResultInput />
                <ResultData />

            </div>

        </div>
    )
}

export default StudentResult