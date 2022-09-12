import './App.css';
import Navbar from './components/Navbar';
import Market from './components/Market'
import Home from './components/Home'
import Exchange from './components/Exchange'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
      <Navbar></Navbar>

      <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/market' element={<Market />} />
            <Route path='/exchange' element={<Exchange />} />
          </Routes>
      </BrowserRouter>
      </div>    
    </div>
  );
}

export default App;