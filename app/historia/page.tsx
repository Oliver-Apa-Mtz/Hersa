"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';

const Button = dynamic(() => import('../../components/Button'), {
	ssr: true,
});

import '../../styles/home.css';

import Images1 from '../../assets/img/images-4.png';
import Images2 from '../../assets/img/images-5.png';
import Images3 from '../../assets/img/images-6.png';
import Images4 from '../../assets/img/images-7.png';
import Logo from '../../assets/img/logo-footer.png';

const Nosotros = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);
	const [isVisibleBanner6, setIsVisibleBanner6] = useState(false);
	const [isVisibleBanner7, setIsVisibleBanner7] = useState(false);
	const [isVisibleBanner8, setIsVisibleBanner8] = useState(false);
	const [isVisibleBanner9, setIsVisibleBanner9] = useState(false);
	const [isVisibleBanner10, setIsVisibleBanner10] = useState(false);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		delay: 500,
	});
	const animationPropsBanner3 = useSpring({
		opacity: isVisibleBanner3 ? 1 : 0,
		transform: isVisibleBanner3 ? 'translateY(0)' : 'translateY(50px)',
		delay: 200,
	});
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateY(0)' : 'translateY(50px)',
		delay: 500,
	});
	const animationPropsBanner5 = useSpring({
		opacity: isVisibleBanner5 ? 1 : 0,
		transform: isVisibleBanner5 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner6 = useSpring({
		opacity: isVisibleBanner6 ? 1 : 0,
		transform: isVisibleBanner6 ? 'translateX(0)' : 'translateX(-150px)',
	});
	const animationPropsBanner7 = useSpring({
		opacity: isVisibleBanner7 ? 1 : 0,
		transform: isVisibleBanner7 ? 'translateY(0)' : 'translateY(50px)',
		delay: 500,
	});
	const animationPropsBanner8 = useSpring({
		opacity: isVisibleBanner8 ? 1 : 0,
		transform: isVisibleBanner8 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner9 = useSpring({
		opacity: isVisibleBanner9 ? 1 : 0,
		transform: isVisibleBanner9 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner10 = useSpring({
		opacity: isVisibleBanner10 ? 1 : 0,
		transform: isVisibleBanner10 ? 'translateY(0)' : 'translateY(50px)',
		delay: 500,
	});

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const viewportHeight = window.innerHeight;

		const targetElement5 = document.getElementById("banner5");
		const targetElement6 = document.getElementById("banner6");
		const targetElement7 = document.getElementById("banner7");
		const targetElement8 = document.getElementById("banner8");
		const targetElement9 = document.getElementById("banner9");
		const targetElement10 = document.getElementById("banner10");

		if (targetElement5) {
			const elementTop = targetElement5.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.2);
			setIsVisibleBanner5(scrollPosition > triggerPoint);
		}
		if (targetElement6) {
			const elementTop = targetElement6.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner6(scrollPosition > triggerPoint);
		}
		if (targetElement7) {
			const elementTop = targetElement7.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner7(scrollPosition > triggerPoint);
		}
		if (targetElement8) {
			const elementTop = targetElement8.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner8(scrollPosition > triggerPoint);
		}
		if (targetElement9) {
			const elementTop = targetElement9.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner9(scrollPosition > triggerPoint);
		}
		if (targetElement10) {
			const elementTop = targetElement10.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner10(scrollPosition > triggerPoint);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1023);
		};
		handleResize();
		setIsVisible(true);
		setIsVisibleBanner2(true);
		setIsVisibleBanner3(true);
		setIsVisibleBanner4(true);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='mt-[80px] bgPpalCream'>
			<div className='banner-history w-screen bg-cover bg-center pt-[150px] pb-20'>
				<div className='home__content'>
					<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
						<div className='w-full lg:w-[500px] mx-auto text-center mb-20'>
							<h2 className='titles text-black uppercase font-playfair'>espacios e ideas que perduran en el tiempo</h2>
							<p className='subtitles text-black font-playfair'>Sobre nuestra historia</p>
						</div>
					</animated.div>
					<div className='w-full lg:flex items-center justify-between'>
						<div>
							<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
								<Image src={Images1} alt="" className='w-[430px] mb-10 mx-auto lg:ml-10' />
							</animated.div>
							<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element">
								<div className='flex gap-4 justify-center lg:justify-start'>
									<Image src={Images2} alt="" className='w-[200px] sm:w-[364px] mb-10' />
									<Image src={Images3} alt="" className='w-[100px] sm:w-[215px] mb-10' />
								</div>
							</animated.div>
						</div>
						<div className='w-full max-w-[535px] text-center lg:text-right mx-auto lg:mx-0 mt-20 lg:mt-0'>
							<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
								<h3 className='titles text-black uppercase font-playfair'>SOMOS HERSA</h3>
								<h4 className='subtitles text-black font-playfair mb-8'>
									Empresa mexicana con más de 15 años de experiencia, consolidados
									como un referente en el sector de la construcción y la arquitectura,
									gracias a nuestra capacidad de ofrecer soluciones integrales,
									de alto valor estético y funcional.
								</h4>
								<p className='text-info text-black font-poppins'>
									Nuestro compromiso con la excelencia nos ha permitido participar en
									proyectos emblemáticos a nivel nacional, trabajando de la mano con
									desarrolladores, arquitectos y constructoras para transformar ideas
									en realidades sólidas. En cada proyecto, combinamos precisión técnica,
									creatividad y profesionalismo, garantizando resultados que superan
									las expectativas.
								</p>
							</animated.div>
						</div>
					</div>
				</div>
			</div>

			<div className='banner-image w-screen bg-cover bg-center p-4 lg:p-10 flex justify-center items-center'>
				<div className='home__content'>
					<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="animated-element" id="banner5">
						<h4 className='text-center text-white font-playfair text-[28px] lg:text-[47px] max-w-[760px] mx-auto font-light leading-[99%]'>
							En HERSA, la calidad no es solo una promesa,
							es un principio rector que guía cada etapa
							de nuestro proceso.
						</h4>
					</animated.div>
				</div>
			</div>

			<div className='pb-20'>
				<div className='w-full lg:w-[660px] mx-auto text-center my-[100px]'>
					<Button text='Ver más' type='primary' position='center' />
				</div>
				<div className='home__content'>
					<div className='w-full lg:flex items-center justify-between'>
						<div className='w-full max-w-[515px] text-center lg:text-left mx-auto lg:mx-0'>
							<animated.div style={!isMobile ? animationPropsBanner6 : {}} className="animated-element" id="banner6">
								<h4 className='subtitles text-black font-playfair mb-6'>Lo hacemos posible, lo hacemos contigo</h4>
								<h3 className='titles text-black font-playfair'>Calidad y Satisfacción</h3>
								<div className='mt-10'>
									<p className='text-info text-black font-poppins'>
										Utilizamos materiales de alta especificación, tecnologías de
										vanguardia y un estricto control para asegurar acabados impecables,
										durabilidad y funcionalidad en cada una de nuestras soluciones.
									</p>
									<p className='text-info text-black font-poppins'>
										La satisfacción del cliente es nuestro principal motivo, cultivamos
										relaciones duraderas basadas en el servicio personalizado. Para
										nosotros, cada proyecto es una oportunidad para demostrar
										nuestra pasión por construir espacios con
										elegancia y carácter.
									</p>
								</div>
							</animated.div>
						</div>
						<div>
							<animated.div style={!isMobile ? animationPropsBanner7 : {}} className="animated-element" id="banner7">
								<Image src={Images4} alt="" className='w-[250px] sm:w-[600px] mb-10 mx-auto lg:mx-0 mt-10 lg:mt-0' />
							</animated.div>
						</div>
					</div>
				</div>

			</div>

			<div className='banner-image--second w-screen bg-cover bg-center p-4 lg:p-10 flex justify-center items-center'>
				<div className='home__content'>
					<animated.div style={!isMobile ? animationPropsBanner8 : {}} className="animated-element" id="banner8">
						<Image src={Logo} alt="Logo" className='w-[322px] mx-auto mb-10' />
						<h4 className='text-center text-white font-playfair text-[28px] lg:text-[47px] max-w-[760px] mx-auto font-light leading-[99%]'>
							Líderes en soluciones <br />arquitectónicas
						</h4>
					</animated.div>
				</div>
			</div>

			<div className='w-screen bg-cover bg-center py-20'>
				<div className='home__content'>
					<div className='w-full lg:w-[550px] mx-auto text-center mb-4'>
						<animated.div style={!isMobile ? animationPropsBanner9 : {}} className="animated-element" id="banner9">
							<h2 className='titles text-black uppercase font-playfair'>Objetivo</h2>
							<p className='subtitles text-black font-playfair mb-8'>
								Nuestro objetivo es claro: continuar siendo
								líderes en soluciones arquitectónicas
							</p>
						</animated.div>
					</div>
					<div className='w-full mx-auto text-center mb-[100px]'>
						<animated.div style={!isMobile ? animationPropsBanner10 : {}} className="animated-element" id="banner10">
							<p className='text-info text-black font-poppins'>
								Buscamos seguir innovando en nuestros procesos, expandir
								nuestra presencia a nuevas regiones del país y fortalecer
								nuestro posicionamiento como socios estratégicos en el
								desarrollo de proyectos vanguardistas.
							</p>
							<p className='text-info text-black font-poppins'>
								A través de la mejora continua, la capacitación constante
								de nuestro equipo y la integración de nuevas tecnologías,
								en HERSA aspiramos a seguir creciendo de manera sostenible,
								siempre con la mirada puesta en la excelencia y el bienestar
								de nuestros clientes.
							</p>
						</animated.div>
					</div>
				</div>
			</div>

			<div className='team w-screen'>
				<div className='home__content'>
					<div className='w-full lg:w-[750px] mx-auto text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair'>Equipo de trabajo</h2>
						<p className='subtitles text-black font-playfair mb-8'>
							Nuestro equipo es la fuerza que da vida a cada proyecto,
							experiencia y detalle en soluciones que inspiran.
						</p>
					</div>
				</div>
				<div className="home__content mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-4 xl:gap-y-16 xl:border-t xl:border-b border-black">
					<div className='teams__item relative xl:w-[320px]'>
						<div className='bg-gray w-[255px] h-[300px] mx-auto'></div>
						<div className="team__text text-center p-4">
							<p className="text-info text-black font-poppins">
								Cargo en la empresa
							</p>
							<h3 className="subtitles text-black text-center font-playfair mb-6">
								Nombre de la persona
							</h3>
						</div>
					</div>
					<div className='teams__item relative xl:w-[320px] border-l border-black'>
						<div className='bg-gray w-[255px] h-[300px] mx-auto'></div>
						<div className="team__text text-center p-4">
							<p className="text-info text-black font-poppins">
								Cargo en la empresa
							</p>
							<h3 className="subtitles text-black text-center font-playfair mb-6">
								Nombre de la persona
							</h3>
						</div>
					</div>
					<div className='teams__item relative xl:w-[320px] border-r border-l border-black '>
						<div className='bg-gray w-[255px] h-[300px] mx-auto'></div>
						<div className="team__text text-center p-4">
							<p className="text-info text-black font-poppins">
								Cargo en la empresa
							</p>
							<h3 className="subtitles text-black text-center font-playfair mb-6">
								Nombre de la persona
							</h3>
						</div>
					</div>
					<div className='teams__item relative xl:w-[320px]'>
						<div className='bg-gray w-[255px] h-[300px] mx-auto'></div>
						<div className="team__text text-center p-4">
							<p className="text-info text-black font-poppins">
								Cargo en la empresa
							</p>
							<h3 className="subtitles text-black text-center font-playfair mb-6">
								Nombre de la persona
							</h3>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
export default Nosotros;
