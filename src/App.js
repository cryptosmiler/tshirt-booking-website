import logo from './assets/images/logo.png';
// import mainimg from './assets/images/background.png';
import './App.css';

function App() {
  return (
    <div className="w-full">
      <div className='w-full '>
        <img src={logo} className='absolute w-32' alt="logo" />
      </div>
      <div className="bg-hero-pattern">
        {/* <img src={mainimg} className="relative w-full h-screen" alt="shirt" /> */}
      </div>

      <div className='inputmsg absolute'>
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
      </div>
    </div>
    
  );
}

export default App;