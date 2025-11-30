module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
      screens: {
        sm: '640px',   
        md: '768px',    
        lg: '1024px',   
        xl: '1280px',
        '2xl': '1536px'
      },
      extend: {
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
          'poppins': ['Poppins', 'sans-serif'],
          'rubik': ['Rubik', 'sans-serif'],
          'sora': ['Sora', 'sans-serif'],
          'space': ['Space Grotesk', 'sans-serif']
        }
      }
    },
    plugins: []
};