import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RoutineIndex from './pages/RoutineIndex'; 
import RoutineShow from './pages/RoutineShow'; 
import RoutineNew from './pages/RoutineNew'; 
import RoutineEdit from './pages/RoutineEdit.js'

const App = () => {

  const [currentUser, setCurrentUser] = useState(null)

   const url = "http://localhost:3000"
  //  const url = "https://***** */.onrender.com"

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        console.log(response)
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("signup errors: ", error))
  }

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn login={login} />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/routineindex" element={<RoutineIndex />} />
        <Route path="/routineshow" element={<RoutineShow />} />
        <Route path="/routinenew" element={<RoutineNew />} />
        <Route path="/routineedit" element={<RoutineEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;