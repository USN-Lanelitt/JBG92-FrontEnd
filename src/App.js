import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./user-list";
import LogginForm from "./LogginForm";
import Assets from "./Assets";



function App() {
  return (
    <div className="App">
        <LogginForm/>
        <Assets/>
        <UserList/>


    </div>
  );
}

export default App;
