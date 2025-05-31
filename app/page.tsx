"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';

const Button = dynamic(() => import('../components/Button'), {
	ssr: true,
});
const ProjectCard = dynamic(() => import('../components/ProjectCard'), {
	ssr: true,
});

import '../styles/home.css';

import Logo from '../assets/img/logo-home.png';
import BannerHome from '../assets/img/banner-home.png';
import Images1 from '../assets/img/images-1.png';
import Images2 from '../assets/img/images-2.png';
import Images3 from '../assets/img/images-3.png';
import Project1 from '../assets/img/card-1.png';
import Project2 from '../assets/img/card-2.png';
import Project3 from '../assets/img/card-3.png';
import Project4 from '../assets/img/card-4.png';
import Project5 from '../assets/img/card-5.png';
import Project6 from '../assets/img/card-6.png';

export default function Home() {
	const router = useRouter();
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);
	const [isVisibleBanner6, setIsVisibleBanner6] = useState(false);
	const [isVisibleBanner7, setIsVisibleBanner7] = useState(false);
	const [isVisibleBanner8, setIsVisibleBanner8] = useState(false);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		delay: 400,
	});
	const animationPropsBanner3 = useSpring({
		opacity: isVisibleBanner3 ? 1 : 0,
		transform: isVisibleBanner3 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner5 = useSpring({
		opacity: isVisibleBanner5 ? 1 : 0,
		transform: isVisibleBanner5 ? 'translateX(0)' : 'translateX(50px)',
	});
	const animationPropsBanner6 = useSpring({
		opacity: isVisibleBanner6 ? 1 : 0,
		transform: isVisibleBanner6 ? 'translateX(0)' : 'translateX(-250px)',
	});
	const animationPropsBanner7 = useSpring({
		opacity: isVisibleBanner7 ? 1 : 0,
		transform: isVisibleBanner7 ? 'translateX(0)' : 'translateX(-150px)',
	});
	const animationPropsBanner8 = useSpring({
		opacity: isVisibleBanner8 ? 1 : 0,
		transform: isVisibleBanner8 ? 'translateY(0)' : 'translateY(50px)',
	});

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const viewportHeight = window.innerHeight;

		const targetElement3 = document.getElementById("banner3");
		const targetElement4 = document.getElementById("banner4");
		const targetElement5 = document.getElementById("banner5");
		const targetElement6 = document.getElementById("banner6");
		const targetElement7 = document.getElementById("banner7");
		const targetElement8 = document.getElementById("banner8");

		if (targetElement3) {
			const elementTop = targetElement3.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner3(scrollPosition > triggerPoint);
		}
		if (targetElement4) {
			const elementTop = targetElement4.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.5);
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
			const triggerPoint = elementTop - (viewportHeight / 1.1);
			setIsVisibleBanner7(scrollPosition > triggerPoint);
		}
		if (targetElement8) {
			const elementTop = targetElement8.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.5);
			setIsVisibleBanner8(scrollPosition > triggerPoint);
		}
	};

	const handleProjectClick = () => {
		router.push(`/proyecto/${1}`);
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
		<div className='bgPpalCream'>
			<div className='home w-screen mt-[80px] pt-[40px] bg-cover bg-center pb-14 relative'>
				<div className='home__content'>
					<div className='flex justify-center items-center mb-[20px]'>
						<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
							<Image src={Logo} alt="" className='w-[413px]' />
						</animated.div>
					</div>
					<div>
						<Image src={BannerHome} alt="" className='' />
						<div>
							<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
								<h1 className='home__content__title font-playfair'>
									<span className='bg-cream'>Construyendo historias en un</span><br />
									<span className='bg-cream'>lugar donde los sueños y la</span><br />
									<span className='bg-cream'>realidad se fusionan.</span>
								</h1>
							</animated.div>
						</div>
					</div>
				</div>
			</div>

			<div className='banner-secondary w-screen bg-cover bg-center pt-10 md:pt-[100px] lg:pt-[900px] mt-4 md:mt-10 lg:-mt-[600px] pb-20'>
				<div className='home__content'>
					<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element" id="banner3">
						<div className='w-full md:w-[660px] mx-auto text-center mb-28 lg:mb-[450px]'>
							<h2 className='titles text-black uppercase font-playfair'>Inversión inteligente, plusvalía y diseño exclusivo.</h2>
							<p className='subtitles text-black font-playfair mb-8'>Conoce nuestros proyectos</p>
							<Button text='Contáctanos' type='primary' position='center' />
						</div>
					</animated.div>
					<div className='w-full lg:flex items-center justify-between'>
						<div>
							<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element" id="banner4">
								<Image src={Images1} alt="" className='w-[600px] mb-10 mx-auto lg:mx-0' />
								<Image src={Images2} alt="" className='w-[600px] mx-auto lg:mx-0' />
							</animated.div>
						</div>
						<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="animated-element" id="banner5">
							<div className='w-full max-w-[515px] text-center lg:text-right mx-auto lg:mx-0 mt-10 lg:mt-0'>
								<h3 className='titles text-black uppercase font-playfair'>¿Quiénes Somos?</h3>
								<h4 className='subtitles text-black font-playfair mb-8'>Construimos más que espacios,<br /> creamos lugares donde los sueños<br /> encuentran su lugar.</h4>
								<p className='text-info text-black font-poppins'>
									En <b className='font-poppins-bold'>Hersa</b>, no solo construimos obras: construimos sueños,
									hogares, futuros. Somos una empresa con 15 años de experiencia
									en el mundo de la construcción, respaldada por profesionales
									apasionados que suman más de 30 años creando proyectos con alma,
									propósito y visión.
								</p>
								<p className='text-info text-black font-poppins'>
									Confiamos en <b className='font-poppins-bold'>Mazatlán</b>, confiamos en <b className='font-poppins-bold'>Sinaloa</b> y en un México
									productivo y creativo. Hersa representa a México y a sus jóvenes
									para mejorar un país en constante desarrollo.
								</p>
								<p className='text-info text-black font-poppins'>
									En <b className='font-poppins-bold'>Hersa</b>, trabajamos con el corazón, porque sabemos que cada
									ladrillo puede sostener una historia, y cada proyecto puede
									transformar vidas.
								</p>
							</div>
						</animated.div>
					</div>
					<div>
						<div className='mt-20'>
							<h4 className='subtitles text-black font-playfair mb-8'>Explora nuestros desarrollos</h4>
							<h3 className='titles text-black font-playfair'>Nuestros proyectos, <br />más que espacios, son escenarios para nuevas historias</h3>
							<div className='md:flex items-center mt-10 gap-4'>
								<div className='mb-4 md:mb-0 font-poppins rounded-full border border-black px-8 py-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
									<p>Filtro 1</p>
								</div>
								<div className='mb-4 md:mb-0 font-poppins rounded-full border border-black px-8 py-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
									<p>Filtro 2</p>
								</div>
								<div className='mb-4 md:mb-0 font-poppins rounded-full border border-black px-8 py-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
									<p>Filtro 3</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='projects w-screen'>
				<animated.div style={!isMobile ? animationPropsBanner6 : {}} className="animated-element" id="banner6">
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:px-10">
						<ProjectCard
							imageSrc={Project1.src}
							title="Arcángel Distrito Residencial"
							description="BIK Independencia es un conjunto de 6 departamentos céntricos, semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas, iglesia, centro, ..."
							onClick={handleProjectClick}
						/>
						<ProjectCard
							imageSrc={Project2.src}
							title="Bik Independencia"
							description="BIK Independencia es un conjunto de 6 departamentos céntricos, semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas, iglesia, centro, ..."
							onClick={handleProjectClick}
						/>
						<ProjectCard
							imageSrc={Project3.src}
							title="Bik Independencia"
							description="BIK Independencia es un conjunto de 6 departamentos céntricos, semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas, iglesia, centro, ..."
							onClick={handleProjectClick}
						/>
						<ProjectCard
							imageSrc={Project4.src}
							title="Bik Independencia"
							description="BIK Independencia es un conjunto de 6 departamentos céntricos, semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas, iglesia, centro, ..."
							onClick={handleProjectClick}
						/>
						<ProjectCard
							imageSrc={Project5.src}
							title="Bik Independencia"
							description="BIK Independencia es un conjunto de 6 departamentos céntricos, semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas, iglesia, centro, ..."
							onClick={handleProjectClick}
						/>
						<ProjectCard
							imageSrc={Project6.src}
							title="Bik Independencia"
							description="BIK Independencia es un conjunto de 6 departamentos céntricos, semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas, iglesia, centro, ..."
							onClick={handleProjectClick}
						/>
					</div>
				</animated.div>
				<div className='w-full md:w-[660px] mx-auto text-center my-20'>
					<Button text='Ver más' type='primary' position='center' />
				</div>
			</div>

			<div className='pb-20'>
				<div className='home__content'>
					<div className='w-full lg:flex items-center justify-between'>
						<div className='w-full max-w-[515px] text-center lg:text-left mx-auto lg:mx-0'>
							<animated.div style={!isMobile ? animationPropsBanner7 : {}} className="animated-element" id="banner7">
								<h4 className='subtitles text-black font-playfair mb-6'>Lo hacemos posible, lo hacemos contigo</h4>
								<h3 className='titles text-black font-playfair'>Más que servicios, somos aliados en cada etapa de tu proyecto.</h3>
								<div className='mt-10'>
									<p className='text-info text-black uppercase border-b border-gray pb-2 font-poppins'>Proyecto</p>
									<p className='text-info text-black uppercase border-b border-gray pb-2 -mt-2 font-poppins'>CONSTRUCCIÓN</p>
									<p className='text-info text-black uppercase border-b border-gray pb-2 -mt-2 font-poppins'>COMERCIALIZACIÓN DE DESARROLLOS INMOBILIARIOS</p>
									<p className='text-info text-black uppercase border-b border-gray pb-2 -mt-2 font-poppins'>OBRA DE INFRAESTRUCTURA</p>
									<p className='text-info text-black uppercase -mt-2 font-poppins'>EQUIPO DE SEGURIDAD INDUSTRIAL</p>
								</div>
							</animated.div>
						</div>
						<div>
							<animated.div style={!isMobile ? animationPropsBanner8 : {}} className="animated-element" id="banner8">
								<Image src={Images3} alt="" className='w-[600px] mb-10 mx-auto lg:mx-0 mt-10 lg:mt-0' />
							</animated.div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}
