import { createContext, useState } from "react";
import Login from "../pages/login/Login";
import { Quora } from "../pages/quora/Quora";
import Signup from "../pages/signup/Signup";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const modalforCreatePost = createContext();
export const modalforAddQuestion = createContext();
export const modalforCreateSpace = createContext();
export const modalforuserProfile = createContext();

function App() {
  const [createPortalforaddpost, setCreateportalforaddpost] = useState(false);
  const [createPortalforaddquestion, setCreateportalforaddquestion] =
    useState(false);
  const [createPortalforcreatespace, setCreateportalforcreatespace] =
    useState(false);
  const [createPortalforuserProfile, setCreatePortaluserProfile] =
    useState(false);

  return (
    <modalforuserProfile.Provider
      value={{ createPortalforuserProfile, setCreatePortaluserProfile }}
    >
      <modalforCreateSpace.Provider
        value={{ createPortalforcreatespace, setCreateportalforcreatespace }}
      >
        <modalforAddQuestion.Provider
          value={{ createPortalforaddquestion, setCreateportalforaddquestion }}
        >
          <modalforCreatePost.Provider
            value={{ createPortalforaddpost, setCreateportalforaddpost }}
          >
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
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </modalforCreatePost.Provider>
        </modalforAddQuestion.Provider>
      </modalforCreateSpace.Provider>
    </modalforuserProfile.Provider>
  );
}

export default App;
