import logo from './assets/images/logo.png'
// import mainimg from './assets/images/background.png';
import './App.css';

function App() {
  return (
    <div className="w-full">
      <div className='w-full '>
        <img src={logo} className='absolute w-32' alt="logo" />
      </div>
      <div className="w-full h-screen bg-no-repeat bg-[url('./assets/images/background.png')] bg-[length:auto-screen] bg-cover bg-top bg-center">
        {/* <img src={mainimg} className="relative" alt="shirt" /> */}
      </div>

      {/* <div className='absolute w-full top-1/2 left-1/2'>
        <div className='w-full'>
          <div>
            <h1 className='text-3xl'>Personalize Your Tshirt</h1>
            <h6>Start your 3 steps to personalize your tshirt</h6>
          </div>
          <div className='textform'>
            <div>
              <p>Input Your Personalized Message</p>
            </div>
            <div>
              <input type='text'></input>
            </div>
            <div>
              <button className='w-full'>CONTINUE</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    
  );
}

export default App;