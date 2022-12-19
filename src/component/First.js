import React from 'react';

function First () {
    return (
      <div className='flex min-h-screen justify-center items-center fadeIn hidden'>
        <div className='w-auto flex flex-col text-white'>
          <div className='w-full flex-none flex-col text-left'>
            <p className='font align-items-left text-[80px] fontBlack'>Personalize Your Tshirt</p>
            <p className='fontLight text-[36px]'>Start your 3 steps to personalize your tshirt</p>
          </div>
          
          <div className='w-full flex-none flex-col text-center p-24 backdrop-blur-md border border-white rounded-xxl'>
            <div className='w-full'>
              <p className='text-[22px]'>Input Your Personalized Message</p>
            </div>
            <div className='w-full mt-5'>
              <input type="text" value="" placeholder='Type your personalized message' className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md shadow-xl placeholder-slate-400" />
            </div>
            <div className='w-full mt-5'>
              <button className='bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 px-52 py-4 rounded-xl'>CONTINUE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default First;