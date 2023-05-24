import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <NavBar />

    <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>

    <Footer />
    
    </>
  );
}

export default App;
