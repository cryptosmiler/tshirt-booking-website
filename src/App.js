import logo from './assets/images/logo.png'
// import mainimg from './assets/images/background.png';
import './App.css';
import First from './component/First'
import Info from './component/Info'
import Result from './component/Result'
import Size from './component/Size'
import Submit from './component/Submit'

function App() {
  return (
    <div className="w-full font-sans">
      <div className='w-full'>
        <img src={logo} className='absolute w-32 inset-y-8 right-3/4 fixed' alt="logo" />  
      </div>
      <div className="fixed z-[-1] inset-0 opacity-[0.7] bg-no-repeat bg-[url('./assets/images/background.png')] bg-top bg-center bg-[length:auto_100%]">
        <First />
        <Info />
        <Result />
        <Size />
        <Submit />
      </div>
      
    </div>
  );
}

export default App;