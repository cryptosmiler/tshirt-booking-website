import React from 'react';

function Submit () {
    return (
        <div className='flex justify-center items-end min-h-screen hidden'>
            <div className='w-2/3 flex flex-col text-white'>
            <div className='fontBlack text-[48px]'>
                <p>Do you like your personal tshirt?</p>
            </div>
            <div className=''>
                <p className='fontMedium text-[32px] mb-5'>You can update your info anytime</p>
            </div>
            <div className='w-full flex justify-between px-10 mb-5 py-12'>
                <button className='rounded-l-lg bg-black px-12 fontMedium text-[25px] bg-opacity-50 border border-white'>BACK</button>
                <button className='rounded-r-lg bg-white px-12 text-black fontMedium text-[25px]'>SUBMIT</button>
            </div>
            </div>
        </div>
    );
  }
  
  export default Submit;