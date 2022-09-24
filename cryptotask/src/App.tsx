import './App.css';
import 'normalize.css';
import { Routes, Route } from 'react-router-dom'; 
import { Info } from './components/Info/Info';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';

export function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
