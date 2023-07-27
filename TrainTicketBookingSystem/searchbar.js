import * as React from 'react';
import './searchbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SearchBar() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  // Sample data for source and destination dropdowns
  const sourceOptions = ["Coimbatore", "Chennai", "Tiruppur","Namakkal"];
  const destinationOptions =  ["Coimbatore", "Chennai", "Tiruppur","Namakkal","Mumbai"];

  return (
    <>
      <div id="scont">
        <form>
          <select id='sfrom' value={source} onChange={(e) => setSource(e.target.value)}>
            <option value="">Select Source</option>
            {sourceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select id='sto' value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">Select Destination</option>
            {destinationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <input
            id='sdate'
            type='date'
            placeholder='dd/mm/yyyy'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <Link
            to="/train"
            state={{ from: source, to: destination, dateofj: date }}
          >
            <button type='submit' id="searchButton">Search</button>
          </Link>
        </form>
      </div>
    </>
  );
}
