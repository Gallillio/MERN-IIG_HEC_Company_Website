/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      { garden: { ...require("daisyui/src/theming/themes")["[data-theme=garden]"], '.subtext-color': { "color": '#64748b' }, } },

      { dracula: { ...require("daisyui/src/theming/themes")["[data-theme=dracula]"], "primary": "#36d399", '.subtext-color': { "color": '#94a3b8' }, } }],
  },
}

