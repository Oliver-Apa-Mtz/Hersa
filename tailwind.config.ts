import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				principal: "#1C4B89",
				black: "#262626",
				cream: "#F6EFE9",
				blue: "#A7B6C5",
				gray: "#C4C4C4",
			},
			fontFamily: {
				playfair: ["var(--font-playfair)"],
				poppins: ["var(--font-poppins)"],
				poppinsBold: ["var(--font-poppins-bold)"],
				poppinsLight: ["var(--font-poppins-light)"],
			},
		},
	},
	plugins: [],
};
export default config;
