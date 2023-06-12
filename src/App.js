import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SupportPage from "./components/SupportPage";
import EmployeePage from "./components/EmployeePage";
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">✍️Написать тикет</Link>
            </li>
            <li>
              <Link to="/employee">📢Разбор тикетов</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<SupportPage />} />
          <Route path="/employee" element={<EmployeePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
