import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const login = () => {
  return <h1>Login</h1>;
};

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
