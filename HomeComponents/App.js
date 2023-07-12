import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './register';
import Login from './login';
import Admin from './admin';
import Home from './home';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;