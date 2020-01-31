import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./user-list";
import LogginForm from "./LogginForm";



function App() {
  return (
    <div className="App">
        <LogginForm/>
      <UserList/>

    </div>
  );
}

export default App;
