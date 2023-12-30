import { createContext, useState } from "react";
import Login from "../pages/login/Login";
import { Quora } from "../pages/quora/Quora";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authprovider } from "../pages/authprovider/Authprovider";
import Authnavigator from "./authnavigator/Authnavigator";
import Questioncomponent from "../pages/questioncomponent/Questioncomponent";
import Createspacepage from "../pages/createspacepage/Createspacepage";

export const modalforCreatePost = createContext();
export const modalforAddQuestion = createContext();
export const modalforCreateSpace = createContext();
export const modalforuserProfile = createContext();
export const modalforSignup = createContext();

function App() {
  const [createPortalforaddpost, setCreateportalforaddpost] = useState(false);
  const [createPortalforaddquestion, setCreateportalforaddquestion] =
    useState(false);
  const [createPortalforcreatespace, setCreateportalforcreatespace] =
    useState(false);
  const [createPortalforuserProfile, setCreatePortaluserProfile] =
    useState(false);
  const [createSignupModal, setCreatesignupModal] = useState(false);

  return (
    <Authprovider>
      <modalforSignup.Provider
        value={{ createSignupModal, setCreatesignupModal }} // context api for signup Modal
      >
        <modalforuserProfile.Provider
          value={{ createPortalforuserProfile, setCreatePortaluserProfile }} // context api for user Modal
        >
          <modalforCreateSpace.Provider
            value={{
              createPortalforcreatespace,
              setCreateportalforcreatespace,
            }} // context api for create space
          >
            <modalforAddQuestion.Provider // context api for add question
              value={{
                createPortalforaddquestion,
                setCreateportalforaddquestion,
              }}
            >
              <modalforCreatePost.Provider // context api for create post
                value={{ createPortalforaddpost, setCreateportalforaddpost }}
              >
                <BrowserRouter>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Authnavigator>
                          <div className="App">
                            <Quora />
                          </div>
                        </Authnavigator>
                      }
                    />
                    <Route path="/addquestion" element={
                      <Authnavigator>
                        <Questioncomponent/>
                      </Authnavigator>
                    }/>
                    <Route path="/createspace" element={
                      <Authnavigator>
                        <Createspacepage/>
                      </Authnavigator>
                    }/>
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </BrowserRouter>
              </modalforCreatePost.Provider>
            </modalforAddQuestion.Provider>
          </modalforCreateSpace.Provider>
        </modalforuserProfile.Provider>
      </modalforSignup.Provider>
    </Authprovider>
  );
}

export default App;
