import Header from "../components/header";
import TeamSection from "../components/TeamSection";
import "../components/Team.css";

// Import foto secara manual nanti:
// import coc from "../assets/coc.png";
// import fyn from "../assets/fyn.png";
// import upi from "../assets/upi.png";
// import bud from "../assets/bud.png";

const members = [
  { id: 1, name: "COC", img: null },
  { id: 2, name: "FYN", img: null },
  { id: 3, name: "UPI", img: null },
  { id: 4, name: "BUD", img: null },
];

export default function Team() {
  return (
    <main className="team-page">
      <div className="team-frame">
        <Header />

        <section className="team-panel">
          <TeamSection members={members} layout="grid" />
        </section>
      </div>
    </main>
  );
}