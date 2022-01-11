import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import SbGradient from './components/SbGradient';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <SbGradient/>
      <Header/>
      <Body/>
      <SbGradient/>
      <Footer/>
    </div>
  );
}

export default App;
