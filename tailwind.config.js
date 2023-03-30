/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
              "primary": "#b0ea8c",
                      
              "secondary": "#4eedd2",
                      
              "accent": "#99122b",
                      
              "neutral": "#211721",
                      
              "base-100": "#E5E2E9",
                      
              "info": "#84DDF5",
                      
              "success": "#137760",
                      
              "warning": "#AE850A",
                      
              "error": "#FC223B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
