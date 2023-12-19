import Login from "../pages/login/Login";
import { Quora } from "../pages/quora/Quora";
import Signup from "../pages/signup/Signup";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Quora />
            </div>
          }
        />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
