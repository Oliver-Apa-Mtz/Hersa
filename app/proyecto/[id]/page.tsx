"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';

const Button = dynamic(() => import('../../../components/Button'), {
	ssr: true,
});
const Form = dynamic(() => import('../../../components/Form'), {
	ssr: true,
});
const ModalSlider = dynamic(() => import('../../../components/ModalSlider'), {
	ssr: true,
});

import Images1 from '../../../assets/img/proyect-1.png';
import Images2 from '../../../assets/img/proyect-2.png';
import Images3 from '../../../assets/img/proyect-3.png';
import Images4 from '../../../assets/img/logo-detail.png';
import Icon1 from '../../../assets/img/icon-waves.svg';
import Icon2 from '../../../assets/img/icon-home.svg';
import Icon3 from '../../../assets/img/icon-face.svg';
import Icon4 from '../../../assets/img/icon-shop.svg';
import Icon5 from '../../../assets/img/icon-gym.svg';
import Video from '../../../assets/img/video.png';
import Mapa from '../../../assets/img/mapa.png';
import Detail1 from '../../../assets/img/detail-1.png';
import Detail2 from '../../../assets/img/detail-2.png';
import Detail3 from '../../../assets/img/detail-3.png';
import Icon6 from '../../../assets/img/icon-aire.svg';
import Icon7 from '../../../assets/img/icon-closet.svg';
import Icon8 from '../../../assets/img/icon-cocina.svg';
import Icon9 from '../../../assets/img/icon-recamara.svg';
import Icon10 from '../../../assets/img/icon-sala.svg';
import Icon11 from '../../../assets/img/icon-comedor.svg';
import Images5 from '../../../assets/img/images-10.png';
import Images6 from '../../../assets/img/images-11.png';
import Images7 from '../../../assets/img/images-12.png';
import Images8 from '../../../assets/img/images-13.png';
import Images9 from '../../../assets/img/images-14.png';

const images = [
	Images1.src,
	Images2.src,
	Images3.src
];

const Proyecto = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);
	const [isVisibleBanner6, setIsVisibleBanner6] = useState(false);
	const [isVisibleBanner7, setIsVisibleBanner7] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		delay: 200,
	});
	const animationPropsBanner3 = useSpring({
		opacity: isVisibleBanner3 ? 1 : 0,
		transform: isVisibleBanner3 ? 'translateY(0)' : 'translateY(100px)',
	});
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateX(0)' : 'translateX(50px)',
		delay: 500,
	});
	const animationPropsBanner5 = useSpring({
		opacity: isVisibleBanner5 ? 1 : 0,
		transform: isVisibleBanner5 ? 'translateY(0)' : 'translateY(100px)',
	});
	const animationPropsBanner6 = useSpring({
		opacity: isVisibleBanner6 ? 1 : 0,
		transform: isVisibleBanner6 ? 'translateY(0)' : 'translateY(100px)',
	});
	const animationPropsBanner7 = useSpring({
		opacity: isVisibleBanner7 ? 1 : 0,
		transform: isVisibleBanner7 ? 'translateX(0)' : 'translateX(-250px)',
		delay: 500,
	});

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const viewportHeight = window.innerHeight;

		const targetElement3 = document.getElementById("banner3");
		const targetElement4 = document.getElementById("banner4");
		const targetElement5 = document.getElementById("banner5");
		const targetElement6 = document.getElementById("banner6");
		const targetElement7 = document.getElementById("banner7");

		if (targetElement3) {
			const elementTop = targetElement3.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner3(scrollPosition > triggerPoint);
		}
		if (targetElement4) {
			const elementTop = targetElement4.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner4(scrollPosition > triggerPoint);
		}
		if (targetElement5) {
			const elementTop = targetElement5.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner5(scrollPosition > triggerPoint);
		}
		if (targetElement6) {
			const elementTop = targetElement6.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner6(scrollPosition > triggerPoint);
		}
		if (targetElement7) {
			const elementTop = targetElement7.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.15);
			setIsVisibleBanner7(scrollPosition > triggerPoint);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1023);
		};
		handleResize();
		setIsVisible(true);
		setIsVisibleBanner2(true);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='mt-[80px] bgPpalCream'>
			<div className='banner-proyectos w-screen bg-cover bg-center pt-10 lg:pt-[100px]'>
				<div className='home__content'>
					<div className='mb-10'>
						<nav className="mb-4 flex gap-2">
							<a href="#" className="text-blue font-poppins">Listado de propiedades</a> /
							<span className="text-black font-poppins">Casa familiar moderna</span>
						</nav>
					</div>
					<div className='w-full text-center mb-10'>
						<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
							<h2 className='titles text-black uppercase font-playfair'>ARCANGEL DISTRITO RESIDENCIAL</h2>
							<p className='subtitles text-black font-playfair'>by HERSA corporativo</p>
						</animated.div>
					</div>
					<div>
						<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
								<Image
									src={Images1}
									alt=""
									className='w-full md:w-[660px] object-cover cursor-pointer'
									onClick={() => {
										setIsOpen(true);
									}
									} />
								<div className="flex flex-nowrap md:flex-wrap gap-4 relative">
									<div className='w-[50%] md:w-auto'>
										<Image src={Images2} alt="" className='w-full md:w-[600px] object-cover' />
									</div>
									<div className='w-[50%] md:w-auto'>
										<Image src={Images3} alt="" className='w-full md:w-[200px] lg:w-[300px] xl:w-[410px] object-cover' />
										<div className="relative md:absolute bottom-[20px] lg:bottom-[70px] right-10 text-black text-[80px] font-playfair">10+</div>
									</div>
								</div>
							</div>
						</animated.div>
					</div>
				</div>
			</div>

			<div className='w-screen'>
				<div className='home__content'>
					<div className="flex justify-between gap-4 flex-wrap">
						<div className='w-full lg:w-[71%] max-w-[900px]'>
							<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element" id="banner3">
								<h2 className="titles titles--lessMargin text-black uppercase font-playfair">UBICACIÓN</h2>
								<p className="text-blue font-playfair mb-[20px] text-[24px]">
									Óscar Pérez Escobosa 10, Real del Valle, 82129 Mazatlán, Sin.
								</p>
								<p className="text-info text-black font-poppins">
									Aquí se construye todo un distrito, todas las comodidades y
									servicios que necesitas para disfrutar tu vida. Viva en el
									paraíso de Mazatlán con un departamento de lujo que se adapte
									a su estilo de vida.
								</p>
								<p className="text-info text-black font-poppins">
									Nuevo desarrollo de Grupo HERSA, el cual contará con 8 torres
									de departamentos, cada una con su Rooftop, coworking y gimnasio.
									Primer desarrollo que tendrá una plaza comercial, la cual
									contará con 84 locales y elevador los cuales estarán distribuidos
									al entrar a los departamentos.
								</p>
							</animated.div>
							<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="animated-element" id="banner5">
								<p className='subtitles text-black font-playfair mb-6 mt-12 text-center md:text-left'>Información de la propiedad</p>
								<div className='flex flex-wrap justify-between'>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Tipo de servicio</p>
										<p className='text-black font-poppins'>Propiedad residencial</p>
									</div>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Tamaño del terreno</p>
										<p className='text-black font-poppins'>6,500 m2</p>
									</div>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Área/Metraje</p>
										<p className='text-black font-poppins'>900 m2</p>
									</div>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Año de construcción</p>
										<p className='text-black font-poppins'>2015</p>
									</div>
								</div>
								<p className='subtitles text-black font-playfair mb-6 mt-12 text-center md:text-left'>Detalles de la propiedad</p>
								<div className='flex flex-wrap justify-between'>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Habitaciones</p>
										<p className='text-black font-poppins'>3 Habitaciones</p>
									</div>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Mobiliario</p>
										<p className='text-black font-poppins'>Semi-amueblado</p>
									</div>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Baños</p>
										<p className='text-black font-poppins'>2 Baños</p>
									</div>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Mobiliario</p>
										<p className='text-black font-poppins'>Cocina moderna abierta</p>
									</div>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Cochera/estacionamiento</p>
										<p className='text-black font-poppins'>2 cocheras</p>
									</div>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Espacio al aire libre</p>
										<p className='text-black font-poppins'>Patio trasero privado con patio.</p>
									</div>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Climatización</p>
										<p className='text-black font-poppins'>Aire acondicionado</p>
									</div>
									<div className='border-b border-blue w-full md:w-[48%] flex justify-center md:justify-between py-2 flex-wrap md:flex-nowrap text-center'>
										<p className='text-blue font-poppins w-full md:w-auto'>Piso</p>
										<p className='text-black font-poppins'>Baldosas de madera y cerámica</p>
									</div>
								</div>
							</animated.div>
							<animated.div style={!isMobile ? animationPropsBanner6 : {}} className="animated-element" id="banner6">
								<p className='subtitles text-black font-playfair mb-6 mt-12 text-center sm:text-left'>Amenidades:</p>
								<div className='flex gap-4 mb-6 items-center flex-wrap sm:flex-nowrap'>
									<div className='flex-none w-[52px] h-[52px] border border-blue rounded-md flex items-center justify-center mx-auto sm:mx-0'>
										<Image src={Icon1} alt="" className='' />
									</div>
									<div className='text-center sm:text-left'>
										<p className='text-black font-poppins font-bold uppercase'>6 ALBERCAS</p>
										<p className='text-black font-poppins'>
											Relájese y Refrésquese: Disfrute de 6 impresionantes
											albercas en nuestro condominio en Mazatlán.
										</p>
									</div>
								</div>
								<div className='flex gap-4 mb-6 items-center flex-wrap sm:flex-nowrap'>
									<div className='flex-none w-[52px] h-[52px] border border-blue rounded-md flex items-center justify-center mx-auto sm:mx-0'>
										<Image src={Icon2} alt="" className='' />
									</div>
									<div className='text-center sm:text-left'>
										<p className='text-black font-poppins font-bold uppercase'>ROOFTOP</p>
										<p className='text-black font-poppins'>
											A vista de pájaro: disfrute de vistas panorámicas desde
											nuestro impresionante RoofTop en Mazatlán.
										</p>
									</div>
								</div>
								<div className='flex gap-4 mb-6 items-center flex-wrap sm:flex-nowrap'>
									<div className='flex-none w-[52px] h-[52px] border border-blue rounded-md flex items-center justify-center mx-auto sm:mx-0'>
										<Image src={Icon3} alt="" className='' />
									</div>
									<div className='text-center sm:text-left'>
										<p className='text-black font-poppins font-bold uppercase'>ÁREA INFANTIL</p>
										<p className='text-black font-poppins'>
											Un oasis para los más pequeños: diviértase en nuestro
											jardín con área infantil Mazatlán.
										</p>
									</div>
								</div>
								<div className='flex gap-4 mb-6 items-center flex-wrap sm:flex-nowrap'>
									<div className='flex-none w-[52px] h-[52px] border border-blue rounded-md flex items-center justify-center mx-auto sm:mx-0'>
										<Image src={Icon2} alt="" className='' />
									</div>
									<div className='text-center sm:text-left'>
										<p className='text-black font-poppins font-bold uppercase'>COWORKING</p>
										<p className='text-black font-poppins'>
											Un espacio inspirador para trabajar: aproveche nuestro
											coworking en rooftop con impresionantes vistas en Mazatlán.
										</p>
									</div>
								</div>
								<div className='flex gap-4 mb-6 items-center flex-wrap sm:flex-nowrap'>
									<div className='flex-none w-[52px] h-[52px] border border-blue rounded-md flex items-center justify-center mx-auto sm:mx-0'>
										<Image src={Icon4} alt="" className='' />
									</div>
									<div className='w-full md:w-auto text-center sm:text-left'>
										<p className='text-black font-poppins font-bold uppercase'>Shopping</p>
										<p className='text-black font-poppins'>
											Greenfield Plaza (1,2 Kilómetros),
										</p>
										<p className='text-black font-poppins'>
											Supermercado (0,9 Kilómetros)
										</p>
									</div>
								</div>
								<div className='flex gap-4 mb-6 items-center flex-wrap sm:flex-nowrap'>
									<div className='flex-none w-[52px] h-[52px] border border-blue rounded-md flex items-center justify-center mx-auto sm:mx-0'>
										<Image src={Icon5} alt="" className='' />
									</div>
									<div className='text-center sm:text-left'>
										<p className='text-black font-poppins font-bold uppercase'>GIMNASIO</p>
										<p className='text-black font-poppins'>
											Entrene con una vista: experimente la energía y el
											confort de nuestro gimnasio en rooftop en Mazatlán.
										</p>
									</div>
								</div>
							</animated.div>
						</div>
						<div className='w-full lg:w-[26%] max-w-[310px] mx-auto lg:mx-0'>
							<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element" id="banner4">
								<Image src={Images4} alt="" className='w-full object-cover' />
								<div className='my-10 w-[270px] mx-auto'>
									<p className='text-info text-info--lessMargin text-black font-poppins'>Precios desde:</p>
									<p className='text-blue font-playfair text-[32px] mb-2 px-2'>$2,350,000 MXN</p>
									<Button text='programar reunión' type='primary' position='center' />
								</div>
								<div className='bg-blue px-4 py-6'>
									<p className='text-black font-poppins font-bold text-[15px] text-center'>Listado por agente de propiedad</p>
									<div className='flex gap-4 my-6'>
										<div className='w-[51px] h-[51px] bg-white rounded-full'></div>
										<div>
											<p className='text-black font-poppins font-bold text-[15px]'>Emila Santos</p>
											<p className='text-gray-200 font-poppinsLight'>emely.zaan@hersa.com</p>
										</div>
									</div>
									<Button text='Contacta al agente' type='secondary' position='center' />
								</div>
							</animated.div>
						</div>
					</div>
				</div>
				<div className='home__content'>
					<div className='flex gap-4 my-[150px] flex-wrap md:flex-nowrap'>
						<div className='w-[628px] text-center mx-auto md:mx-0 mb-20 md:mb-0'>
							<p className='titles text-black font-playfair uppercase'>Video</p>
							<Image src={Video} alt="" className='w-full object-cover' />
						</div>
						<div className='w-[628px] text-center mx-auto md:mx-0'>
							<p className='titles text-black font-playfair uppercase'>Ubicación</p>
							<Image src={Mapa} alt="" className='w-full object-cover' />
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className='home__content'>
					<div className='w-full text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair' style={{ fontSize: 47 }}>Modelos</h2>
					</div>
				</div>
				<animated.div style={!isMobile ? animationPropsBanner7 : {}} className="animated-element" id="banner7">
					<div className='flex justify-center gap-4 flex-wrap xl:flex-nowrap'>
						<div className='w-[90%] md:w-[48%] xl:w-[32%] text-center mb-10'>
							<p className='titles text-black font-playfair' style={{ fontSize: 26 }}>Modelo Aura: 50 m²</p>
							<Image src={Detail1} alt="" className='w-full object-cover' />
							<Button text='Ver más' type='primary' position='center' isFull />
						</div>
						<div className='w-[90%] md:w-[48%] xl:w-[32%] text-center mb-10'>
							<p className='titles text-black font-playfair' style={{ fontSize: 26 }}>Modelo CELESTE: 86 m²,</p>
							<Image src={Detail2} alt="" className='w-full object-cover' />
							<Button text='Ver más' type='primary' position='center' isFull />
						</div>
						<div className='w-[90%] md:w-[48%] xl:w-[32%] text-center mb-10'>
							<p className='titles text-black font-playfair' style={{ fontSize: 26 }}>Modelo ARMONIA: Interior 110 m².</p>
							<Image src={Detail3} alt="" className='w-full object-cover' />
							<Button text='Ver más' type='primary' position='center' isFull />
						</div>
					</div>
				</animated.div>
			</div>

			<div className='w-screen'>
				<div className='home__content'>
					<div className='w-full text-center mb-20 mt-20'>
						<h2 className='titles text-black uppercase font-playfair' style={{ fontSize: 47 }}>Modelos</h2>
					</div>
					<div className='w-full xl:flex justify-between gap-10'>
						<div>
							<div className="projects__text bg-blue mx-auto px-4 md:px-8 py-6" style={{ marginTop: 0 }}>
								<h3 className="subtitles text-black text-center font-playfair mb-4">Modelo Aura</h3>
								<p className="text-info text-black mb-2 font-poppinsBold uppercase">DISTRIBUCIÓN EN UNA PLANTA</p>
								<p className="text-info text-black mb-2 font-poppinsBold uppercase">Superficie total: 50 m²</p>
								<p className="text-info text-black mb-2 font-poppinsBold uppercase">DESDE $3,340,000</p>
								<p className="text-info text-black mb-2 font-poppins">
									Modelo aura es un departamento distribuidos en i nivel de 50m2, cerca de escuelas, iglesia, centro, ...
								</p>
							</div>
							<p className='subtitles text-black font-playfair mt-12 text-center'>Amenidades:</p>
							<div className='w-full md:w-[440px] mx-auto flex gap-4 mb-2 items-center flex-nowrap md:px-10'>
								<div className='flex-none w-[52px] h-[52px] flex items-center justify-center'>
									<Image src={Icon6} alt="" className='' />
								</div>
								<div className='text-left'>
									<p className='text-black font-poppins uppercase'>
										Cuenta con aire acondicionado
									</p>
								</div>
							</div>
							<div className='w-full md:w-[440px] mx-auto flex gap-4 mb-2 items-center flex-nowrap md:px-10'>
								<div className='flex-none w-[52px] h-[52px] flex items-center justify-center'>
									<Image src={Icon7} alt="" className='' />
								</div>
								<div className='text-left'>
									<p className='text-black font-poppins uppercase'>
										closets
									</p>
								</div>
							</div>
							<div className='w-full md:w-[440px] mx-auto flex gap-4 mb-2 items-center flex-nowrap md:px-10'>
								<div className='flex-none w-[52px] h-[52px] flex items-center justify-center'>
									<Image src={Icon8} alt="" className='' />
								</div>
								<div className='text-left'>
									<p className='text-black font-poppins uppercase'>
										cocina integral
									</p>
								</div>
							</div>
							<div className='w-full md:w-[440px] mx-auto flex gap-4 mb-2 items-center flex-nowrap md:px-10'>
								<div className='flex-none w-[52px] h-[52px] flex items-center justify-center'>
									<Image src={Icon9} alt="" className='' />
								</div>
								<div className='text-left'>
									<p className='text-black font-poppins uppercase'>
										2 recámaras
									</p>
								</div>
							</div>
							<div className='w-full md:w-[440px] mx-auto flex gap-4 mb-2 items-center flex-nowrap md:px-10'>
								<div className='flex-none w-[52px] h-[52px] flex items-center justify-center'>
									<Image src={Icon10} alt="" className='' />
								</div>
								<div className='text-left'>
									<p className='text-black font-poppins uppercase'>
										sala
									</p>
								</div>
							</div>
							<div className='w-full md:w-[440px] mx-auto flex gap-4 mb-2 items-center flex-nowrap md:px-10 border-b border-gray pb-4'>
								<div className='flex-none w-[52px] h-[52px] flex items-center justify-center'>
									<Image src={Icon11} alt="" className='' />
								</div>
								<div className='text-center sm:text-left'>
									<p className='text-black font-poppins uppercase'>
										comedor
									</p>
								</div>
							</div>
							<button className="w-full md:w-[440px] mx-auto xl:w-full flex gap-2 hover:gap-4 text-info text-black font-poppins transition-all duration-300 justify-end">
								MÁS INFORMACIÓN <span>→</span>
							</button>
						</div>
						<div className='mt-10 xl:mt-0'>
							<div>
								<Image src={Images5} alt="" className='w-full md:w-[635px] mx-auto xl:mx-0 object-cover' />
							</div>
							<div className='w-full md:w-[668px] mx-auto xl:mx-0 flex gap-4 my-8'>
								<div>
									<Image src={Images6} alt="" className='w-full object-cover' />
								</div>
								<div>
									<Image src={Images7} alt="" className='w-full object-cover' />
								</div>
								<div>
									<Image src={Images8} alt="" className='w-full object-cover' />
								</div>
								<div>
									<Image src={Images9} alt="" className='w-full object-cover' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='w-screen bg-cover bg-center pt-[150px] pb-20 lg:pb-[280px]'>
				<div className='home__content'>
					<div className='w-full lg:w-[750px] mx-auto text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair'>¿Algo en mente? hablemos</h2>
						<p className='subtitles text-black font-playfair'>
							Póngase en contacto con nuestro equipo para obtener
							rápida respuestas a sus dudas
						</p>
					</div>
					<Form />
				</div>
			</div>

			<ModalSlider
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				images={images}
			/>

		</div>
	)
}
export default Proyecto;
