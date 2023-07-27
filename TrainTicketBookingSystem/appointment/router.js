import React from 'react';
import i from './page1.jpg'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Deleteform from './delete';
import Register from './register';
import DataBaseView from './view';
import UpdateForm from './update';
import Welcome from './welcome';
function Routing(){
    return(
        <>
        <Router>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link to="/welcome" class="nav-link">Home</Link>
  </li>
  <li class="nav-item">
    <Link to="/register" class="nav-link">Book Now</Link>
  </li>
  <li class="nav-item">
    <Link to="/view" class="nav-link">Appointment Details</Link>
  </li>
  <li class="nav-item">
    <Link to="/update" class="nav-link">Update Appointment</Link>
  </li>
  <li class="nav-item">
    <Link to="/delete" class="nav-link">Cancel Appointment</Link>
  </li>

  
</ul>
<Routes>
  <Route path="/welcome" element={<Welcome/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/view" element={<DataBaseView/>}/>
  <Route path="/update" element={<UpdateForm/>}/>
  <Route path="/delete" element={<Deleteform/>}/>
</Routes>
    </Router>
        </>
    );
}
export default Routing;