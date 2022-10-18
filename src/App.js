// import logo from './logo.svg';
// import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard name="Young Iverson" age={18} hairColor="White"/>
      <PersonCard name="Jake Smith" age={20} hairColor="Indigo"/>
      <PersonCard name="Anna Brown" age={30} hairColor="Navy"/>
      <PersonCard name="Jen James" age={40} hairColor="Dirty Blonde"/>
    </div>
  );
}

export default App;

