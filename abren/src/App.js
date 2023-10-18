import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import Form from "./scenes/form";
import Login from "./scenes/login";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/form" element={<Form />}></Route>

      </Routes>

      <p>hello</p>
    </div>
  );
}

export default App;
