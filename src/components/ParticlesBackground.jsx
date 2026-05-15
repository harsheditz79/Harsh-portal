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

        fpsLimit: 60,

        detectRetina: false,

        background: {
          color: {
            value: "transparent",
          },
        },

        particles: {
          number: {
            value: window.innerWidth < 768 ? 18 : 28,
          },

          color: {
            value: ["#7b2cff", "#00d4ff", "#ffffff"],
          },

          links: {
            enable: window.innerWidth > 768,

            color: "#00d4ff",

            distance: 120,

            opacity: 0.12,

            width: 1,
          },

          move: {
            enable: true,

            speed: 0.7,

            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: {
              min: 1,
              max: 2.5,
            },
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;
