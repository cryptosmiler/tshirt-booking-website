import React from 'react';

function Info () {
    return (
        <div className='flex justify-center items-center min-h-screen hidden '>
        <div className='w-auto flex-none flex-col text-white'>
          <div className='fontBlack text-[48px]'>
            <p>Let us know about your info</p>
          </div>
          <div className=''>
            <p className='fontMedium text-[32px]'>Fill in the forms & Preview the tshirt</p>
          </div>
          <div className='shadow-xl bg-opacity-60 bg-black p-4 rounded-lg'>

            <div className='w-full flex flex-col text-[24px] fontReglight' >
              <div className='w-full flex flex-col shadow-lg mt-2'>
                <label>Your Full Name *</label>
                <input type='text' className='backdrop-blur-xl bg-opacity-20 bg-black border rounded-sm border-white px-2' placeholder='Your Full Name'/>
              </div>
              <div className='w-full flex flex-col shadow-lg mt-2'>
                <label>Your Email Address *</label>
                <input type='text' className='backdrop-blur-xl bg-opacity-20 bg-black border rounded-sm border-white px-2' placeholder='Email Address'/>
              </div>
              <div className='w-full flex flex-col shadow-lg mt-2'>
                <label>Your Phone Number *</label>
                <input type='text' className='backdrop-blur-xl bg-opacity-20 bg-black border rounded-sm border-white px-2' placeholder='Phone Number'/>
              </div>
              <div className='w-full flex flex-col shadow-lg mt-2'>
                <label>Your Country *</label>
                <input type='text' className='backdrop-blur-xl bg-opacity-20 bg-black border rounded-sm border-white px-2' placeholder='Select Country'/>
              </div>
              <div className='w-full flex flex-col shadow-lg mt-2 mb-3'>
                <label>Your Company *</label>
                <input type='text' className='backdrop-blur-xl bg-opacity-20 bg-black border rounded-sm border-white px-2' placeholder='Your Company Name'/>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-between mt-5'>
            <button className='rounded-l-lg bg-black px-12 fontMedium text-[25px] bg-opacity-50 border border-white'>BACK</button>
            <button className='rounded-r-lg bg-white px-12 text-black fontMedium text-[25px]'>Next</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Info;