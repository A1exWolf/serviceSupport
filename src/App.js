import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import SupportPage from "./components/SupportPage";
import EmployeePage from "./components/EmployeePage";
import TicketAnalysisPage from "./components/TicketAnalysisPage";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">✍️Создать тикет</Link>
            </li>
            <li>
              <Link to="/employee">📢Разбор тикетов</Link>
            </li>
            {isAuthenticated ? (
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Выйти
                </button>
              </li>
            ) : null}
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<SupportPage isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/employee"
            element={
              isAuthenticated ? <EmployeePage /> : <Navigate to="/login" />
            }
          />
          <Route
            isAuthenticated={isAuthenticated}
            onLogin={handleLogin}
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/ticket-analysis"
            element={
              isAuthenticated ? (
                <TicketAnalysisPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
