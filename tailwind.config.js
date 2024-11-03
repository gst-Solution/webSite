import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        "fade-in-down": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(0, -100%, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
          "fade-in-left": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(-100%, 0, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "fade-in-right": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(100%, 0, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "fade-in-up": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(0, 100%, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },      
      },
      animation: {
        fadeindown: 'fade-in-down 1s ease-in 0.25s 1',
        fadeinleft: 'fade-in-left 1s ease-in-out 0.25s 1',
        fadeinright: 'fade-in-right 1s ease-in-out 0.25s 1',
        fadeinup: 'fade-in-up 1s ease-in-out 0.25s 1',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
