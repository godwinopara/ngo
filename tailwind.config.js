/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-bg": "url('./images/heroImg.jpg')",
				turkey: "url('./images/turkey.jpg')",
				hawaii: "url('./images/hawaii.webp')",
				hawaii2: "url('./images/huwaii2.jpg')",
			},
		},
	},
	plugins: [],
};
