import React from 'react';

function Result () {
    return (
        <div className='flex justify-center items-end min-h-screen '>
            <div className='w-2/3 flex flex-col text-white'>
            <div className='fontBlack text-[48px]'>
                <p style={{textShadow: "5px 5px 10px black"}}>Great, </p>
            </div>
            <div className='mb-32'>
                <p className='fontMedium text-[32px]'>Your tshirt is successfully personalized.</p>
            </div>
            </div>
        </div>
    );
  }
  
  export default Result;