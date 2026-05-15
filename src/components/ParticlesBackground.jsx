import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {

          number: {
            value: 28,
          },

          color: {
            value: ["#7b2cff", "#00d4ff", "#ffffff"],
          },

          links: {
            enable: true,
            color: "#00d4ff",
            distance: 140,
            opacity: 0.08,
            width: 1,
          },

          move: {
            enable: true,
            speed: 0.6,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: { min: 1, max: 3 },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;