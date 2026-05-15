import { useEffect, useRef } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Confetti from "react-confetti";

function RevealScreen() {

  const audioRef = useRef(null);

  useEffect(() => {

    if (audioRef.current) {

      audioRef.current.volume = 0.35;

      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked");
      });

    }

  }, []);

  return (
    <div className="reveal-screen">

      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
      />

      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={180}
        recycle={false}
      />

      <ParticlesBackground />

      <div className="reveal-glow purple"></div>
      <div className="reveal-glow cyan"></div>

      <div className="reveal-card">

        <p className="small-text">
          MEMORY ARCHIVE • 15 MAY
        </p>

        <h1 className="thank-title">
          THANK YOU ❤️
        </h1>

        <p className="message">
          Every wish.
          Every mention.
          Every memory shared today
          became part of something unforgettable.
        </p>

        <div className="line"></div>

        <p className="footer-text">
          — Harsh Birthday System
        </p>

      </div>
    </div>
  );
}

export default RevealScreen;