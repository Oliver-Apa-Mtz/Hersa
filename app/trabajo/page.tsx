"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSpring, animated } from '@react-spring/web';

const Form = dynamic(() => import('../../components/Form'), {
	ssr: true,
});
import Logo from '../../assets/img/logo-home.png';

const Trabajo = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateY(0)' : 'translateY(100px)',
		delay: 300,
	});

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1023);
		};
		handleResize();
		setIsVisible(true);
		setIsVisibleBanner2(true);
	}, []);

	return (
		<div className='mt-[80px]'>
			<div className='banner-patrocinio w-screen bg-cover bg-center pt-[150px] pb-20'>
				<div className='home__content'>
					<div className='w-full lg:w-[1100px] mx-auto text-center mb-20'>
						<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
							<div className='flex justify-center items-center mb-[20px]'>
								<Image src={Logo} alt="" className='w-[413px]' />
							</div>
							<h2 className='titles text-black uppercase font-playfair'>Construye tu futuro con nosotros</h2>
							<p className='text-info text-black font-poppins'>
								Nuestro equipo está formado por personas apasionadas por la excelencia, la innovación y el detalle,
								pilares que nos permiten crear proyectos residenciales únicos y de alto nivel.
							</p>
							<p className='subtitles text-black font-playfair'>
								Tu talento transforma espacios
							</p>
						</animated.div>
					</div>
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
						<Form bgColor='gray' />
					</animated.div>
				</div>
			</div>
		</div>
	)
}
export default Trabajo;
