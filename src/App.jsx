import "./style/App.css";
import Countdown from "./components/Countdonw";
import MusicPlayer from "./components/MusicPlayer";
import { useCallback, useState } from "react";
import Preloader from "./components/Preloader";

function App() {

  const [loading, setLoading] = useState(true);

  const finishLoading = useCallback(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Preloader onFinish={finishLoading}/>}

      <main className="landing">
      <header className="header">
        <a className="logo" href="#home">
          KRIOS<span></span>
        </a>

        <nav className="nav">
          <a href="#launch">CONTEO REGRESIVO</a>
        </nav>

        <a
          className="social-link"
          href="https://www.instagram.com/krios_ofc/"
          target="_blank"
          rel="noreferrer"
        >
          INSTAGRAM ↗
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">STREETWEAR</p>

          <h1>
            TU ESTILO.
            <br />
            TUS REGLAS.
          </h1>

          <p className="description">
            Cada proceso
            <br />
            Tiene su tiempo, Nunca te rindas
          </p>

          <a className="hero-button" href="#launch">
            DESCUBRE MÁS <span>↗</span>
          </a>
        </div>

        <p className="vertical-label">KRIOS — EST. 2026</p>
      </section>

      <Countdown />
      <MusicPlayer/>

      <footer className="footer">
        <span>KRIOS © 2026</span>
        <span>BUILT DIFFERENT.</span>
      </footer>
    </main>
    </>
  );
}

export default App;


