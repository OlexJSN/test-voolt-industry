/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      colors: {
        'themed-black': '#202123',
      }
    }
	},
	plugins: []
};

