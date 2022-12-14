import logo from './assets/images/logo.png';
import mainimg from './assets/images/background.png';
import './App.css';

function App() {
  return (
    <div className="First">
      <img src={logo} className='logo' alt="logo" />
      <img src={mainimg} alt="shirt" />
      <h1 className="text-3xl font-bold underline">
        hello
      </h1>
    </div>
  );
}

export default App;