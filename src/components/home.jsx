
import Header from "./header";
import Hero from "./Hero";
import "./Home.css";

// Nanti, untuk memasukkan foto banner secara manual:
// import bannerImage from "../assets/nama-foto-kamu.png";

export default function Home() {
  return (
    <main className="lp-page" id="home">
      <div className="lp-frame">
        <Header />

        <Hero
          // Setelah foto diimpor, gunakan:
          // image={bannerImage}
        />
      </div>
    </main>
  );
}
