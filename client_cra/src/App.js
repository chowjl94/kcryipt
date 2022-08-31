import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Transactions from './components/Transactions';
import Footer from './components/Footer';


function App() {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
        <Services></Services>
        <Transactions></Transactions>
        <Footer></Footer>
    </div>
  );
}

export default App;
