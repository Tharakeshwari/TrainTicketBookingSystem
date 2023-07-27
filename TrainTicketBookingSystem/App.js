import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './register';
import Login from './login';
import Admin from './admin';
import Home from './home';
import Support from './support';
import Traingp from './SeatSelection';
import Seat from './seats';
import Payment from './payment';
import AdminHome from './adminhome';
import AddTrain from './addtrain';
import ManageTrain from './ManageTrain';
import DeleteTrain from './deletetrain';
import UpdateTrain from './updatetrain';
import Feedback from './feedback';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/train' element={<Traingp/>}/>
        <Route path='/seats' element={<Seat/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/addtrain' element={<AddTrain/>}/>
        <Route path='/managetrain' element={<ManageTrain/>}/>
        <Route path='/deletetrain' element={<DeleteTrain/>}/>
        <Route path='/updatetrain' element={<UpdateTrain/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;