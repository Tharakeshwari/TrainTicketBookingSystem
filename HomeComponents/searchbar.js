import * as React from 'react';
import './searchbar.css';
export default function SearchBar() {
  return (
    <>
    <div id="scont">
    <form>
    <input id='sfrom'type='text'placeholder='Source'></input>
    <input id='sto' type='text'placeholder='Destination'></input>
    <input id='sdate' type='date'placeholder='dd/mm/yyyy'></input>
    <button type='submit' id="searchButton">Search</button>
    </form>
    </div>
    </>
    );
}