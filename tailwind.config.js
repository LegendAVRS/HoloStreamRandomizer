/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.(html|tsx)", "./src/**/*.(html|tsx)"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "d-",
  },
};
