/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ff4d6d',
                secondary: '#ff8fa3',
                background: '#ffe6e9',
            },
            fontFamily: {
                dancing: ['"Dancing Script"', 'cursive'],
                poppins: ['Poppins', 'sans-serif'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
