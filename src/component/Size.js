import React from 'react';

function Size () {
    return (
      <div className='flex justify-center items-center min-h-screen hidden'>
        <div className='w-auto flex-none flex-col text-white'>
          <div className='fontBlack text-[48px]'>
            <p>Which of these sizes fits you?</p>
          </div>
          <div className=''>
            <p className='fontMedium text-[32px]'>Choose one size for your shirt</p>
          </div>
          <div className='w-full grid grid-cols-2 text-[42px] fontBlack text-center' style={{textShadow: "5px 5px 10px black"}}>
              <div className='backdrop-blur-xl p-24 m-5 shadow-lg rounded-xl bg-white bg-opacity-20'>XXL</div>
              <div className='backdrop-blur-xl p-24 m-5 shadow-lg rounded-xl bg-white bg-opacity-20'>XL</div>
              <div className='backdrop-blur-xl p-24 m-5 shadow-lg rounded-xl bg-white bg-opacity-20'>M</div>
              <div className='backdrop-blur-xl p-24 m-5 shadow-lg rounded-xxl bg-white bg-opacity-20'>L</div>
          </div>
          <div className='w-full flex justify-between px-10'>
            <button className='rounded-l-lg bg-black px-12 fontMedium text-[25px] bg-opacity-50 border border-white'>BACK</button>
            <button className='rounded-r-lg bg-white px-12 text-black fontMedium text-[25px]'>Next</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Size;