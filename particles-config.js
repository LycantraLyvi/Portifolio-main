// Garantir que o canvas aceite eventos de mouse
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("particles-js");
  if (canvas) {
    canvas.style.pointerEvents = "auto";
  }

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 2000
        }
      },
      color: {
        value: ["#0077b6", "#00adb5", "#ffffffff"] // Array para múltiplas cores
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "canvas", // Melhor para repulse
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: false
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 150, // Aumente se quiser afastar mais
          duration: 0.4
        }
      }
    },
    retina_detect: true
  });
});
