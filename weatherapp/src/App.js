import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
