import React from "react";

const links = [
  { label: "HOME", href: "/" },
  { label: "EVENTS", href: "/events" },
  { label: "COUNCIL TEAM", href: "/council-team" },
];

export default function Header({ active = "COUNCIL TEAM", onLogin }) {
  return (
    <header className="hdr">
      <style>{css}</style>

      {/* logo pill */}
      <a className="hdr-logo" href="/">
        <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="11" r="5" fill="#8b84f0" />
          <path d="M6 26c0-5 4-8 10-8s10 3 10 8z" fill="#8b84f0" />
          <circle cx="8" cy="14" r="3.2" fill="#f0a35e" />
          <circle cx="24" cy="14" r="3.2" fill="#e86f8f" />
        </svg>
        <span className="hdr-logo-text">2nd group</span>
      </a>

      {/* nav */}
      <nav className="hdr-nav">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={"hdr-link" + (l.label === active ? " is-active" : "")}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* login */}
      <button className="hdr-login" onClick={onLogin}>
        LOGIN
      </button>
    </header>
  );
}

const css = `
.hdr {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: #e9e9f2;
  padding: 6px 0;
  font-family: "Rubik", "Poppins", system-ui, sans-serif;
}

.hdr-logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f1efff;
  border-radius: 999px;
  padding: 8px 16px 8px 10px;
  text-decoration: none;
}
.hdr-logo-text {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #6d65dd;
}

.hdr-nav {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 620px;
}
.hdr-link {
  position: relative;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #1f1f2e;
  text-decoration: none;
  padding: 6px 2px;
}
.hdr-link::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 2px;
  background: #1f1f2e;
  transform: scaleX(0);
  transition: transform 0.2s ease;
}
.hdr-link:hover::after,
.hdr-link.is-active::after { transform: scaleX(1); }

.hdr-login {
  background: #2a2a3d;
  color: #fff;
  border: 0;
  border-radius: 999px;
  padding: 16px 52px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}
.hdr-login:hover { background: #3a3a55; }
.hdr-login:active { transform: scale(0.97); }

@media (max-width: 760px) {
  .hdr { flex-wrap: wrap; justify-content: center; }
  .hdr-nav { order: 3; width: 100%; max-width: none; }
  .hdr-login { padding: 12px 36px; }
}
`;
