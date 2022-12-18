import logo from './assets/images/logo.png'
// import mainimg from './assets/images/background.png';
import './App.css';

function App() {
  return (
    <div className="w-full font-sans">
      <div className='w-full'>
        <img src={logo} className='absolute w-32 inset-y-8 right-3/4 fixed' alt="logo" />  
      </div>
      <div className="fixed z-[-1] inset-0 opacity-[0.7] bg-no-repeat bg-[url('./assets/images/background.png')] bg-top bg-center bg-[length:auto_100%]">
        {/* <img src={mainimg} className="relative" alt="shirt" /> */}
      </div>
      <div className='flex min-h-screen justify-center items-center fadeIn'>
        <div className='w-auto flex flex-col text-white'>
          <div className='w-full flex-none flex-col text-left'>
            <p className='fontbs align-items-left text-[80px] fontBlack'>Personalize Your Tshirt</p>
            <p className='fontLight text-[36px]'>Start your 3 steps to personalize your tshirt</p>
          </div>
          
          <div className='w-full flex-none flex-col text-center p-24 backdrop-blur-md border border-white rounded-xl '>
            <div className='w-full'>
              <p className='text-[22px]'>Input Your Personalized Message</p>
            </div>
            <div className='w-full mt-5'>
              <input type="text" value="" placeholder='Type your personalized message' className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-xl placeholder-slate-400" />
            </div>
            <div className='w-full mt-5'>
              <button className='bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 px-52 py-4 rounded-xl'>CONTINUE</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;