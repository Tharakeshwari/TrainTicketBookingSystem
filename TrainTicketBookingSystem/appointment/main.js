import React from 'react'
import Register from './register';
import DataBaseView from './view';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
function Main() {
  return ( 
    <Router>
      <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link to="/DataBaseView" class="nav-link">View</Link>
  </li>
  <li class="nav-item">
  <Link to="/Register" class="nav-link">Book Now</Link>
  </li>
</ul>
<Routes>
  <Route path="/view" element={<DataBaseView/>}></Route>
  <Route path="/register" element={<Register/>}></Route>
</Routes>
    </Router>
   );
}

export default Main;