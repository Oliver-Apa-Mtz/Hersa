import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const playfair = localFont({
	src: './fonts/Playfair-Variable.ttf',
	display: 'swap',
	variable: '--font-playfair',
})
const poppins = localFont({
	src: './fonts/Poppins-Regular.ttf',
	variable: '--font-poppins',
	weight: '400',
	display: 'swap',
})
const poppinsBold = localFont({
	src: './fonts/Poppins-ExtraBold.ttf',
	variable: '--font-poppins-bold',
	weight: '800',
	display: 'swap',
})
const poppinsLight = localFont({
	src: './fonts/Poppins-Light.ttf',
	variable: '--font-poppins-light',
	weight: '300',
	display: 'swap',
})

import Header from '../components/Header';
import Footer from '../components/Footer';
import ReduxProvider from '../components/ReduxProvider';

export const metadata: Metadata = {
	title: 'Hersa - Construyendo historias en un lugar donde los sueños y la realidad se fusionan.',
	description: 'Hersa, Construyendo historias en un lugar donde los sueños y la realidad se fusionan.',

	openGraph: {
		title: 'Hersa - Construyendo historias en un lugar donde los sueños y la realidad se fusionan.',
		description: 'Hersa - Construyendo historias en un lugar donde los sueños y la realidad se fusionan.',
		url: 'https://www.hersa.com',
		type: 'website',
		locale: 'es_MX',
		siteName: 'Hersa Corporativo',
		images: [
			{
				url: 'https://www.hersa.com/img/banner-secondary.png',
				width: 1200,
				height: 630,
				alt: 'Hersa Corporativo',
			},
		],
	},

	// Keywords
	keywords: [],

	// Robots
	robots: {
		index: true,
		follow: true,
	},

	creator: 'Hersa Corporativo',
	publisher: 'Hersa',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${playfair.variable} ${poppins.variable} ${poppinsBold.variable} ${poppinsLight.variable}`}>
			<body>
				<Header />
				<ReduxProvider>
					{children}
				</ReduxProvider>
				<Footer />
			</body>
		</html>
	);
}
