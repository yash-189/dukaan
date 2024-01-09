const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html", 
  "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E2640", 
         
  
        },
        secondary: {
          DEFAULT: "#353C53", 
         
           
        
        
    
        },
      },
    },
  },
  plugins: [],
});