"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSpring, animated } from '@react-spring/web';

const Form = dynamic(() => import('../../components/Form'), {
	ssr: true,
});

const Contacto = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
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
		<div className='mt-[80px] bgPpalCream'>
			<div className='contact w-screen bg-cover bg-center pt-[150px] pb-20 lg:pb-[280px]'>
				<div className='home__content'>
					<div className='w-full lg:w-[750px] mx-auto text-center mb-20'>
						<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
							<h2 className='titles text-black uppercase font-playfair'>¿Algo en mente? hablemos</h2>
							<p className='subtitles text-black font-playfair'>
								Póngase en contacto con nuestro equipo para obtener
								rápida respuestas a sus dudas
							</p>
						</animated.div>
					</div>
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
						<Form />
					</animated.div>
				</div>
			</div>
		</div>
	)
}

export default Contacto