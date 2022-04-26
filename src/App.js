import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import MyTextForm from './components/MyTextForm'
import MyAlert from './components/MyAlert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      'type': type,
      'message': message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#4a4e52'
      showAlert('Enabled Dark Mode', 'light');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Enabled Light Mode', 'sucess');
    }
  }
  return (
    <Router>
    <div>
      <Navbar title="MyTextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <About /> */}
      <MyTextForm showAlert={showAlert} mode={mode} />
      <MyAlert alert={alert} />
      <div className='container my-2'>

        {/* <About /> */}
      </div>
      </div>
</Router>
      )
}
