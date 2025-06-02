"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
const Form = dynamic(() => import('../../components/Form'), {
	ssr: true,
});
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Images1 from '../../assets/img/images-8.png';
import Logo from '../../assets/img/logo-home.png';
import Icon1 from '../../assets/img/patrocinios/image-1.png';
import Icon2 from '../../assets/img/patrocinios/image-2.png';
import Icon3 from '../../assets/img/patrocinios/image-3.png';
import Icon4 from '../../assets/img/patrocinios/image-4.png';
import Icon5 from '../../assets/img/patrocinios/image-5.png';
import Icon6 from '../../assets/img/patrocinios/image-6.png';
import Icon7 from '../../assets/img/patrocinios/image-7.png';
import Icon8 from '../../assets/img/patrocinios/image-8.png';
import Icon9 from '../../assets/img/patrocinios/image-9.png';
import Icon10 from '../../assets/img/patrocinios/image-10.png';

const Proovedores = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 10000,
		variableWidth: true,
	};
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateX(0)' : 'translateX(100px)',
		delay: 200,
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
					<div className='w-full lg:flex items-center justify-between'>
						<div>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<Image src={Images1} alt="" className='w-[630px] mb-10 mx-auto lg:ml-10' />
							</animated.div>
						</div>
						<div className='w-full max-w-[535px] text-center lg:text-right mx-auto lg:mx-0 mt-20 lg:mt-0'>
							<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
								<div className='flex justify-center items-center mb-[20px]'>
									<Image src={Logo} alt="" className='w-[413px]' />
								</div>
								<h3 className='titles text-black uppercase font-playfair'>
									en hersa la excelencia se construye en conjunto
								</h3>
								<h4 className='text-info text-black font-poppins'>
									Trabajamos de la mano con una red selecta de partners
									estratégicos que comparten nuestra visión de calidad,
									innovación y compromiso.
								</h4>
								<p className='subtitles text-black font-playfair'>Estos son nuestros Proveedores ¡Conócelos!</p>
							</animated.div>
						</div>
					</div>
				</div>
			</div>

			<div style={{ width: '100vw', overflowX: 'hidden', minHeight: 400 }}>
				<Slider {...settings}>
					<div className='w-screen bg-cover bg-center pt-[50px]' style={{ width: '100vw' }}>
						<div className='home__content'>
							<div className="grid grid-cols-2 lg:grid-cols-5">
								<div className='border-b border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon1} alt="Patrocinio 1" className="w-[227px] h-[max-content]" />
								</div>
								<div className='border-b border-l border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon2} alt="Patrocinio 2" className="w-[126px] h-[max-content]" />
								</div>
								<div className='border-b border-l border-r border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon3} alt="Patrocinio 3" className="w-[152px] h-[max-content]" />
								</div>
								<div className='border-b border-r border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon4} alt="Patrocinio 4" className="w-[122px] h-[max-content]" />
								</div>
								<div className='border-b border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon5} alt="Patrocinio 5" className="w-[108px] h-[max-content]" />
								</div>

								<div className='flex justify-center items-center p-4'>
									<Image src={Icon6} alt="Patrocinio 6" className="w-[128px] h-[max-content]" />
								</div>
								<div className='border-l border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon7} alt="Patrocinio 7" className="w-[144px] h-[max-content]" />
								</div>
								<div className='border-l border-transparent border-r lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon8} alt="Patrocinio 8" className="w-[85px] h-[max-content]" />
								</div>
								<div className='border-r border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon9} alt="Patrocinio 9" className="w-[73px] h-[max-content]" />
								</div>
								<div className='flex justify-center items-center p-4'>
									<Image src={Icon10} alt="Patrocinio 10" className="w-[62px] h-[max-content]" />
								</div>
							</div>
						</div>
					</div>

					<div className='w-screen bg-cover bg-center pt-[50px]' style={{ width: '100vw' }}>
						<div className='home__content'>
							<div className="grid grid-cols-2 lg:grid-cols-5">
								<div className='border-b border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon1} alt="Patrocinio 1" className="w-[227px] h-[max-content]" />
								</div>
								<div className='border-b border-l border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon2} alt="Patrocinio 2" className="w-[126px] h-[max-content]" />
								</div>
								<div className='border-b border-l border-r border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon3} alt="Patrocinio 3" className="w-[152px] h-[max-content]" />
								</div>
								<div className='border-b border-r border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon4} alt="Patrocinio 4" className="w-[122px] h-[max-content]" />
								</div>
								<div className='border-b border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon5} alt="Patrocinio 5" className="w-[108px] h-[max-content]" />
								</div>

								<div className='flex justify-center items-center p-4'>
									<Image src={Icon6} alt="Patrocinio 6" className="w-[128px] h-[max-content]" />
								</div>
								<div className='border-l border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon7} alt="Patrocinio 7" className="w-[144px] h-[max-content]" />
								</div>
								<div className='border-l border-transparent border-r lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon8} alt="Patrocinio 8" className="w-[85px] h-[max-content]" />
								</div>
								<div className='border-r border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon9} alt="Patrocinio 9" className="w-[73px] h-[max-content]" />
								</div>
								<div className='flex justify-center items-center p-4'>
									<Image src={Icon10} alt="Patrocinio 10" className="w-[62px] h-[max-content]" />
								</div>
							</div>
						</div>
					</div>

					<div className='w-screen bg-cover bg-center pt-[50px]' style={{ width: '100vw' }}>
						<div className='home__content'>
							<div className="grid grid-cols-2 lg:grid-cols-5">
								<div className='border-b border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon1} alt="Patrocinio 1" className="w-[227px] h-[max-content]" />
								</div>
								<div className='border-b border-l border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon2} alt="Patrocinio 2" className="w-[126px] h-[max-content]" />
								</div>
								<div className='border-b border-l border-r border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon3} alt="Patrocinio 3" className="w-[152px] h-[max-content]" />
								</div>
								<div className='border-b border-r border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon4} alt="Patrocinio 4" className="w-[122px] h-[max-content]" />
								</div>
								<div className='border-b border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon5} alt="Patrocinio 5" className="w-[108px] h-[max-content]" />
								</div>

								<div className='flex justify-center items-center p-4'>
									<Image src={Icon6} alt="Patrocinio 6" className="w-[128px] h-[max-content]" />
								</div>
								<div className='border-l border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon7} alt="Patrocinio 7" className="w-[144px] h-[max-content]" />
								</div>
								<div className='border-l border-transparent border-r lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon8} alt="Patrocinio 8" className="w-[85px] h-[max-content]" />
								</div>
								<div className='border-r border-transparent lg:border-gray flex justify-center items-center p-4'>
									<Image src={Icon9} alt="Patrocinio 9" className="w-[73px] h-[max-content]" />
								</div>
								<div className='flex justify-center items-center p-4'>
									<Image src={Icon10} alt="Patrocinio 10" className="w-[62px] h-[max-content]" />
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>

			<div className='w-screen bg-cover bg-center pt-[150px] pb-20 mb-10'>
				<div className='home__content'>
					<div className='w-full lg:w-[1100px] mx-auto text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair'>¿Quieres formar parte de nuestro éxito?</h2>
						<p className='text-info text-black font-poppins'>
							Cada uno de nuestros aliados, desde arquitectos y diseñadores
							hasta proveedores y especialistas técnicos, juegan un papel
							clave en la creación de espacios residenciales únicos,
							sofisticados y duraderos.
						</p>
						<p className='subtitles text-black font-playfair'>
							Póngase en contacto con nuestro equipo
						</p>
					</div>
					<Form bgColor='gray' />
				</div>
			</div>

		</div>
	)
}
export default Proovedores;
