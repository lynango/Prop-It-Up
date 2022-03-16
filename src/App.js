import './App.css';
import PersonCard from './components/PersonCard';
import React from 'react';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Lyna"} lastName={"Ngo"} age={25} hairColor={"brown"}/>
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={26} hairColor={"black"}/>
      <PersonCard firstName={"Brodin"} lastName={"Bones"} age={4} hairColor={"apricot"}/>
    </div>
  );
}

export default App;
