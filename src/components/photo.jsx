import React from "react";
// import Header from "./Header"; // <- your finished header bar

// Import your photos manually (transparent PNG cutouts work best):
// import coc from "./assets/coc.png";
// import fyn from "./assets/fyn.png";
// import upi from "./assets/upi.png";
// import bud from "./assets/bud.png";

const members = [
  { name: "COC", img: null /* coc */ },
  { name: "FYN", img: null /* fyn */ },
  { name: "UPI", img: null /* upi */ },
  { name: "BUD", img: null /* bud */ },
];

export default function Component() {
  return (
    <div className="page">
      <style>{css}</style>

      <div className="frame">
        {/* <Header /> */}

        <section className="panel">
          {members.map((m) => (
            <article className="card" key={m.name}>
              <h2 className="card-name">{m.name}</h2>

              <div className="photo-box">
                {m.img ? (
                  <img className="photo" src={m.img} alt={m.name} />
                ) : (
                  <div className="photo placeholder">Photo</div>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

const css = `
.page {
  min-height: 100vh;
  background: #2a2a3d;
  padding: 24px;
  box-sizing: border-box;
}

/* big light rounded frame (the header lives at the top of this) */
.frame {
  background: #e9e9f2;
  border-radius: 28px;
  padding: 16px;
  min-height: calc(100vh - 48px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* dark inner panel holding the cards */
.panel {
  flex: 1;
  background: #2a2a3d;
  border-radius: 18px;
  padding: 40px 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: center;
}

/* member card */
.card {
  position: relative;
  background: #e9e9f2;
  border-radius: 18px;
  padding: 8px;
  height: 340px;
  box-sizing: border-box;
  box-shadow: 0 10px 0 -2px #1b1b2a, 0 14px 18px rgba(0, 0, 0, 0.35);
  overflow: visible;
}

/* big bold name behind the person */
.card-name {
  position: absolute;
  top: 6px;
  left: 0;
  right: 0;
  margin: 0;
  text-align: center;
  font-size: 72px;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1;
  color: #2a2a3d;
  z-index: 1;
}

/* dark rounded box at the bottom of the card */
.photo-box {
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 8px;
  height: 205px;
  background: #24243a;
  border-radius: 16px;
  z-index: 2;
}

/* person sticks out above the dark box and overlaps the name */
.photo {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 125%;
  max-width: 100%;
  object-fit: contain;
  object-position: bottom;
  z-index: 3;
  /* soft fade at the bottom edge */
  -webkit-mask-image: linear-gradient(to bottom, #000 80%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 80%, transparent 100%);
}

.placeholder {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a8aa5;
  font-size: 14px;
}

/* responsive */
@media (max-width: 1000px) {
  .panel { grid-template-columns: repeat(2, 1fr); row-gap: 40px; }
}
@media (max-width: 560px) {
  .panel { grid-template-columns: 1fr; }
  .card-name { font-size: 60px; }
}
`;
