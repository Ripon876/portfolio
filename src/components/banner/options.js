export const options = {
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  particles: {
    number: {
      value: 160,
      density: {
        enable: false
      }
    },
    color: {
      value: "#fff",
      animation: {
        enable: true,
        speed: 40,
        sync: false
      }
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 3,
      random: true,
      animation: {
        enable: true,
        speed: 4,
        minimumValue: 0.3,
        sync: false
      }
    },
    links: {
      enable: false,
      distance: 100,
      color: "random",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      random: true,
      speed: 1,
      direction:{random : true},
      outMode: "out"
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      // onHover: {
      //   enable: true,
      //   mode: "bubble"
      // },
      onClick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 10,
        duration: 2,
        opacity: 0.1
      },
      repulse: {
        distance: 200
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      }
    }
  },
  polygon: {
    draw: {
      enable: true,
      stroke: {
        color: {
          value: "rgba(255,255,255,0.2)"
        },
        width: 0.5,
        opacity: 0.2
      }
    },
    enable: true,
    inline: {
      arrangement: "equidistant"
    },
    move: {
      radius: 10,
      type: "path"
    },
    scale: 0.5,
    type: "inline",
    url: "https://particles.js.org/images/smalldeer.svg"
  }


};