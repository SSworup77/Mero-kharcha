import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Authentication/Login'
import Signup from './pages/Authentication/Signup'
import Home from './pages/Dashboard/Home'
import Income from './pages/Dashboard/Income'
import Expense from './pages/Dashboard/Expense'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/dashboard" element={<Home/>} />
          <Route path="/income" element={<Income/>} />
          <Route path="/expense" element={<Expense/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

const Root=()=>{
  //check to see if token exists in localstorage
  const isAuthenticated = !!localStorage.getItem('token');

  //redirect to dahsboard if authenticated
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
}
