import { createContext, useState } from "react";
import Login from "../pages/login/Login";
import { Quora } from "../pages/quora/Quora";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authprovider } from "../pages/authprovider/Authprovider";
import Authnavigator from "./authnavigator/Authnavigator";
import Questioncomponent from "../pages/questioncomponent/Questioncomponent";
import Createspacepage from "../pages/createspacepage/Createspacepage";
import Underconstruction from "../pages/underconstruction/Underconstruction";

export const modalforCreatePost = createContext();
export const modalforAddQuestion = createContext();
export const modalforCreateSpace = createContext();
export const modalforuserProfile = createContext();
export const modalforSignup = createContext();
export const modalforAddAnswer = createContext();
export const modalforEditQuestion = createContext();
export const postAddrefresh = createContext();
export const toggleTheme =createContext();

function App() {
  let themeState=JSON.parse(sessionStorage.getItem('themeMode'))|| false;
  console.log('themeState', themeState);
  const [createPortalforaddpost, setCreateportalforaddpost] = useState(false);
  const [createPortalforaddquestion, setCreateportalforaddquestion] =
    useState(false);
  const [createPortalforcreatespace, setCreateportalforcreatespace] =
    useState(false);
  const [createPortalforuserProfile, setCreatePortaluserProfile] =
    useState(false);
  const [createSignupModal, setCreatesignupModal] = useState(false);
  const [createportalforaddanswer, setCreateportalforaddanswer] =
    useState(false);
  const [createportalforeditquestion, setCreateportalforeditquestion] =
    useState(false);
  const [postcalled, setPostcalled] = useState(null);
  const [darkMode, setDarkMode]=useState(themeState); //for dark mode functionality

  


  return (
      <Authprovider>
    <toggleTheme.Provider value={{darkMode, setDarkMode}}>
      <modalforEditQuestion.Provider
        value={{ createportalforeditquestion, setCreateportalforeditquestion }}
      >
        <modalforAddAnswer.Provider
          value={{ createportalforaddanswer, setCreateportalforaddanswer }}
        >
          <postAddrefresh.Provider
            value={{ postcalled, setPostcalled }} // context api for calling the post data form DB
          >
            <modalforSignup.Provider
              value={{ createSignupModal, setCreatesignupModal }} // context api for signup Modal
            >
              <modalforuserProfile.Provider
                value={{
                  createPortalforuserProfile,
                  setCreatePortaluserProfile,
                }} // context api for user Modal
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
                      value={{
                        createPortalforaddpost,
                        setCreateportalforaddpost,
                      }}
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
                          <Route
                            path="/addquestion/:userId"
                            element={
                              <Authnavigator>
                                <Questioncomponent />
                              </Authnavigator>
                            }
                          />
                          <Route
                            path="/createspace/:userId"
                            element={
                              <Authnavigator>
                                <Createspacepage />
                              </Authnavigator>
                            }
                          />
                          <Route path="/login" element={<Login />} />
                          <Route path="/underconstruction" element={<Underconstruction />} />
                        </Routes>
                      </BrowserRouter>
                    </modalforCreatePost.Provider>
                  </modalforAddQuestion.Provider>
                </modalforCreateSpace.Provider>
              </modalforuserProfile.Provider>
            </modalforSignup.Provider>
          </postAddrefresh.Provider>
        </modalforAddAnswer.Provider>
      </modalforEditQuestion.Provider>
    </toggleTheme.Provider>
    </Authprovider>
  );
}

export default App;
