import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage({ isAuthenticated, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка учетных данных
    if (username === "volkov" && password === "password") {
      onLogin(); // Вызываем функцию onLogin при успешном входе
    } else {
      setError("Неверные учетные данные");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Вход</h2>
        {error && <p className="error">{error}</p>}
        <label htmlFor="username">Имя пользователя:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;
