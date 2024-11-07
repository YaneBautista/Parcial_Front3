import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from "./Components/Form";
import './App.css'

  import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <h1>¿Cuál es tu canción favorita?</h1>
      <form></form>
      <Card />
    </div>
  );
}

export default App;