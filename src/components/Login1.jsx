import React, { useState } from "react";
import Header from "./Header";

export default function Login({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ username, password });
    else console.log("login:", { username, password });
  };

  return (
    <div className="lg-page">
      <style>{css}</style>

      <div className="lg-frame">
        <Header active="" />

        <main className="lg-main">
          <form className="lg-card" onSubmit={handleSubmit}>
            {/* card top: small logo | divider | title */}
            <div className="lg-top">
              <span className="lg-logo">
                <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
                  <circle cx="16" cy="11" r="5" fill="#8b84f0" />
                  <path d="M6 26c0-5 4-8 10-8s10 3 10 8z" fill="#8b84f0" />
                  <circle cx="8" cy="14" r="3.2" fill="#f0a35e" />
                  <circle cx="24" cy="14" r="3.2" fill="#e86f8f" />
                </svg>
                <span>2nd group</span>
              </span>
              <span className="lg-divider" />
              <h1 className="lg-title">LOGIN</h1>
            </div>

            <input
              className="lg-input"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />

            <input
              className="lg-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <button className="lg-btn" type="submit">
              LOGIN
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

const css = `
.lg-page {
  min-height: 100vh;
  background: #2a2a3d;
  padding: 24px;
  box-sizing: border-box;
  font-family: "Rubik", "Poppins", system-ui, sans-serif;
}

.lg-frame {
  background: #e9e9f2;
  border-radius: 28px;
  padding: 12px 34px 40px;
  min-height: calc(100vh - 48px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.lg-main {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 48px;
}

/* dark login card */
.lg-card {
  width: 100%;
  max-width: 304px;
  min-height: 348px;
  background: #2a2a3d;
  border-radius: 18px;
  padding: 20px 25px 36px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.lg-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
}
.lg-logo {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #f1efff;
  border-radius: 999px;
  padding: 4px 10px 4px 6px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: -0.3px;
  color: #6d65dd;
}
.lg-divider {
  width: 5px;
  height: 46px;
  border-radius: 4px;
  background: #cfcfd8;
}
.lg-title {
  margin: 0;
  flex: 1;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #fff;
}

.lg-input {
  width: 100%;
  height: 36px;
  border: 0;
  outline: 0;
  border-radius: 999px;
  background: #e9e9f2;
  padding: 0 22px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: #2a2a3d;
}
.lg-input::placeholder { color: #b3b3bf; }
.lg-input:focus { box-shadow: 0 0 0 3px #8b84f0; }

.lg-btn {
  margin-top: 2px;
  border: 0;
  border-radius: 999px;
  background: #e9e9f2;
  color: #2a2a3d;
  padding: 10px 27px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}
.lg-btn:hover { background: #fff; }
.lg-btn:active { transform: scale(0.97); }

@media (max-width: 560px) {
  .lg-frame { padding: 12px 16px 32px; }
}
`;
