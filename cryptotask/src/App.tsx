import './App.css';
import 'normalize.css';
import { Routes, Route } from 'react-router-dom'; 
import { Info } from './components/Info/Info';
import { Main } from './pages/Main';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
