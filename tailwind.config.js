module.exports = {
  purge: [".src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: '#root',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
