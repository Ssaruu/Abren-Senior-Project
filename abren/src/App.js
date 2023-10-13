import './App.css';
import { Routes, Route} from "react-router-dom";
import Form from "./scenes/form";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Form />}></Route>

      </Routes>

      <p>hello</p>
    </div>
  );
}

export default App;
