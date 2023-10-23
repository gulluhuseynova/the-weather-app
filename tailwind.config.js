/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},

        screens: {
            sm: '576px',
            md: '768px',
            lg: '1024px',
        },
        margin: {
            '30%': '30%',
            '20%':'20%',
            '100%': '100%',
            '20px': '20px',
        },
    },
    plugins: [],
}
