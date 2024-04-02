import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
