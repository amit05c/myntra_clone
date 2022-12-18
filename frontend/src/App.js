import logo from './logo.svg';
import './App.css';
import Allroutes from './pages/Allroutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//testing
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Allroutes/>
     <Footer/>
    </div>
  );
}

export default App;
