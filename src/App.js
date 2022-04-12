
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
