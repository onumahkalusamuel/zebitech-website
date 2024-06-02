import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#541F7E',
                secondary: '#473BF0',
            }
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ['light']
    }
}

