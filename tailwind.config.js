/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-bg": "url('./images/isreal.jpg')",
				turkey: "url('./images/turkey.jpg')",
				hawaii: "url('./images/hawaii.webp')",
				hawaii2: "url('./images/huwaii2.jpg')",
				partnership: "url('./images/getInvolve.jpg')",
				getupdate: "url('./images/getupdate.jpg')",
				achievement: "url('./images/achievement.webp')",
				healthhuman: "url('./images/healthhuman-bg-2.jpg')",
				takeaction1: "url('./images/takeaction1.jpg')",
				takeaction2: "url('./images/takeaction2.jpg')",
				workHero: "url('./images/emergency-program.jpg')",
				career: "url('./images/work-with-us-bg.jpg')",
			},
			screens: {
				md: "767px",
			},
		},
	},
	plugins: [],
};
