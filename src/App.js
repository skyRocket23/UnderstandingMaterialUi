import './App.css';
import Home from './pages/Home';
import Tour from './pages/Tour';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AppBar from './components/AppBar';


function App() {
  return (
    <BrowserRouter>
      <AppBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tour" element={<Tour/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
