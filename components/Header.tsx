"use client";
import '../styles/header.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/img/logo.png';
import IconoMenu from '../assets/img/menu.png';

const Header = () => {
	const pathname = usePathname();
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsHeaderFixed(scrollPosition > headerHeight);
	};

	const handleResize = () => {
		const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
		if (isLargeScreen) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header className={`header w-screen bg-principal flex ${isHeaderFixed ? 'fixed shadow-sm' : 'absolute'}`}>
			<div className={`header__content`}>
				<div className="header__logo">
					<Link href="/" className="cursor-pointer">
						<Image src={Logo} alt="Logo" className='w-[185px]' />
					</Link>
				</div>
				<div className="header__nav">
					<Link
						href="/"
						className={`header__nav__item border-b-2 border-transparent hover:border-white text-white font-poppinsLight ${pathname === '/' ? 'active' : ''}`}>
						Inicio
					</Link>
					<Link
						href="/historia"
						className={`header__nav__item border-b-2 border-transparent hover:border-white text-white font-poppinsLight ${pathname === '/historia' ? 'active' : ''}`}>
						Historia
					</Link>
					<Link
						href="/proyectos"
						className={`header__nav__item border-b-2 border-transparent hover:border-white text-white font-poppinsLight ${pathname === '/proyectos' ? 'active' : ''}`}>
						Proyectos
					</Link>
					<Link
						href="/contacto"
						className={`header__nav__item border-b-2 border-transparent hover:border-white text-white font-poppinsLight ${pathname === '/contacto' ? 'active' : ''}`}>
						Contacto
					</Link>
				</div>
				<div className='header__menu text-6xl absolute top-[20px] right-[20px]'>
					<Image src={IconoMenu} alt="Menu" className='w-[40px] h-max cursor-pointer invert' onClick={() => setIsMenuOpen(!isMenuOpen)} />
				</div>
			</div>
			{isMenuOpen && (
				<div className="header__nav__movil">
					<Link
						href="/"
						className="header__nav__item__movil font-poppinsLight cursor-pointer w-full bg-blue hover:bg-principal hover:text-white"
						onClick={() => setIsMenuOpen(false)}>
						Inicio
					</Link>
					<Link
						href="/historia"
						className="header__nav__item__movil font-poppinsLight cursor-pointer w-full bg-blue hover:bg-principal hover:text-white"
						onClick={() => setIsMenuOpen(false)}>
						Historia
					</Link>
					<Link
						href="/proyectos"
						className="header__nav__item__movil font-poppinsLight cursor-pointer w-full bg-blue hover:bg-principal hover:text-white"
						onClick={() => setIsMenuOpen(false)}>
						Proyectos
					</Link>
					<Link
						href="/contacto"
						className="header__nav__item__movil font-poppinsLight cursor-pointer w-full bg-blue hover:bg-principal hover:text-white"
						onClick={() => setIsMenuOpen(false)}>
						Contacto
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header