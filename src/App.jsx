
import { useState } from 'react';
import heroImg from './assets/hero.png';
import './App.css';
import Login from './components/Login';
import Photo from './components/Photo';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('HOME');
  const [showLogin, setShowLogin] = useState(false);

  // TAMBAHAN: data anggota tim
  const members = [
    { id: 1, name: 'COC', image: null },
    { id: 2, name: 'FAN', image: null },
    { id: 3, name: 'ULI', image: null },
    { id: 4, name: 'BUD', image: null },
  ];

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setShowLogin(menu === 'LOGIN');
  };

  return (
    <div className="app-background">
      <div className="main-container">

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-logo">
            <span className="logo-badge-small">
              <span className="logo-icon">🌼</span>
              <span className="logo-text">2nd group</span>
            </span>
          </div>

          <div className="nav-links">
            {['HOME', 'EVENTS', 'COUNCIL TEAM'].map((menu) => (
              <button
                key={menu}
                type="button"
                className={`nav-item ${
                  activeMenu === menu ? 'active' : ''
                }`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="nav-login-btn"
            onClick={() => handleMenuClick('LOGIN')}
          >
            LOGIN
          </button>
        </nav>

        {/* TAMBAHAN: HALAMAN LOGIN */}
        {showLogin ? (
          <main className="content-body">
            <Login />
          </main>
        ) : activeMenu === 'COUNCIL TEAM' ? (

          /* TAMBAHAN: HALAMAN MEET THE TEAM */
          <main className="content-body">
            <section className="team-gallery">
              {members.map((member) => (
                <Photo
                  key={member.id}
                  name={member.name}
                  image={member.image}
                />
              ))}
            </section>
          </main>

        ) : (
          <>
            {/* HERO BANNER */}
            <section className="hero-banner">
              <img
                src={heroImg}
                className="hero-image"
                alt="2nd Group Banner"
              />

              <div className="hero-overlay"></div>

              <div className="hero-text">
                <p className="hero-subtitle">
                  GET TO KNOW US.
                </p>

                <h1 className="hero-title">
                  <span className="hero-number">
                    2<span className="ordinal">nd</span>
                  </span>
                  <span className="hero-group">GROUP</span>
                </h1>

                <p className="hero-caption">
                  Nice to meet you.
                </p>
              </div>
            </section>

            {/* TOMBOL NAVIGASI */}
            <section className="hero-actions">

              {/* EXPLORE EVENTS */}
              <button
                type="button"
                className="action-card"
                onClick={() => handleMenuClick('EVENTS')}
              >
                <svg
                  className="calendar-icon"
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="5"
                    y="9"
                    width="54"
                    height="50"
                    rx="5"
                    fill="#777773"
                  />
                  <rect
                    x="10"
                    y="18"
                    width="44"
                    height="36"
                    rx="2"
                    fill="white"
                  />
                  <path
                    d="M18 4V15 M32 4V15 M46 4V15"
                    stroke="#777773"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 29H47 M17 39H41"
                    stroke="#777773"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>

                <span className="action-divider"></span>

                <span className="action-label">
                  EXPLORE
                  <br />
                  EVENTS
                </span>
              </button>

              {/* MEET THE TEAM */}
              <button
                type="button"
                className="action-card"
                onClick={() => handleMenuClick('COUNCIL TEAM')}
              >
                <div className="profile-icon">
                  <svg
                    viewBox="0 0 64 64"
                    fill="white"
                    aria-hidden="true"
                  >
                    <path d="M32 5C22 5 18 12 18 23C18 30 21 35 25 39L24 45L12 52C8 55 7 59 7 62H57C57 59 56 55 52 52L40 45L39 39C43 35 46 30 46 23C46 12 42 5 32 5Z" />
                  </svg>
                </div>

                <span className="action-divider"></span>

                <span className="action-label team-label">
                  MEET
                  <br />
                  THE
                  <br />
                  TEAM
                </span>
              </button>

            </section>
          </>
        )}

      </div>
    </div>
  );
}
