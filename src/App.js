// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import News from './components/News';


function App() {
  return (
    <>
      <Navbar />
      <News pageSize ={5} />
    </>
  );
}

export default App;
