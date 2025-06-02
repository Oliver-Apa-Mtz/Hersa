"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useSpring, animated } from '@react-spring/web';

const Button = dynamic(() => import('../../components/Button'), {
	ssr: true,
});
const ProjectCard = dynamic(() => import('../../components/ProjectCard'), {
	ssr: true,
});

import '../../styles/home.css';

import Project1 from '../../assets/img/card-1.png';
import Project2 from '../../assets/img/card-2.png';
import Project3 from '../../assets/img/card-3.png';
import Project4 from '../../assets/img/card-4.png';
import Project5 from '../../assets/img/card-5.png';
import Project6 from '../../assets/img/card-6.png';

const Proyectos = () => {
	const router = useRouter();
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateY(0)' : 'translateY(100px)',
		delay: 200,
	});
	const animationPropsBanner3 = useSpring({
		opacity: isVisibleBanner3 ? 1 : 0,
		transform: isVisibleBanner3 ? 'translateX(0)' : 'translateX(-250px)',
		delay: 500,
	});
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateY(0)' : 'translateY(50px)',
	});

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const viewportHeight = window.innerHeight;

		const targetElement4 = document.getElementById("banner4");

		if (targetElement4) {
			const elementTop = targetElement4.getBoundingClientRect().top + scrollPosition;
			const triggerPoint = elementTop - (viewportHeight / 1.3);
			setIsVisibleBanner4(scrollPosition > triggerPoint);
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
		setIsVisibleBanner3(true);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='mt-[80px] bgPpalCream'>
			<div className='banner-proyectos w-screen bg-cover bg-center pt-10 lg:pt-[150px] pb-20'>
				<div className='home__content'>
					<div className='w-full lg:w-[690px] mb-20'>
						<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
							<p className='subtitles text-black font-playfair mb-8'>Explora nuestros desarrollos</p>
							<h2 className='titles text-black font-playfair'>
								Nuestros proyectos, más que espacios,
								son escenarios para nuevas historias
							</h2>
						</animated.div>
					</div>
					<div className="w-full max-w-[1340px] mx-auto px-4 py-6">
						<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
								<div className="flex flex-col gap-2">
									<label className="text-info text-black font-poppins">Tipo de residencia</label>
									<select className="w-full border border-blue rounded-lg px-4 py-2 bg-transparent text-info text-black font-poppins focus:outline-none cursor-pointer hover:bg-blue hover:border-black">
										<option>Todos los tipos</option>
									</select>
								</div>
								<div className="flex flex-col gap-2">
									<label className="text-info text-black font-poppins">Venta / Renta</label>
									<select className="w-full border border-blue rounded-lg px-4 py-2 bg-transparent text-info text-black font-poppins focus:outline-none cursor-pointer hover:bg-blue hover:border-black">
										<option>50,000 - $150,000</option>
									</select>
								</div>
								<div className="flex flex-col gap-2">
									<label className="text-info text-black font-poppins">Precio</label>
									<select className="w-full border border-blue rounded-lg px-4 py-2 bg-transparent text-info text-black font-poppins focus:outline-none cursor-pointer hover:bg-blue hover:border-black">
										<option>50,000 - $150,000</option>
									</select>
								</div>
								<div className="flex flex-col gap-2">
									<label className="text-info text-black font-poppins">Zona</label>
									<select className="w-full border border-blue rounded-lg px-4 py-2 bg-transparent text-info text-black font-poppins focus:outline-none cursor-pointer hover:bg-blue hover:border-black">
										<option>Jakarta, Indonesia</option>
									</select>
								</div>

							</div>
						</animated.div>
					</div>
				</div>
			</div>

			<div className='w-screen'>
				<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
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
			</div>

			<div className='team--custom w-screen bg-center'>
				<div className='home__content'>
					<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element" id="banner4">
						<div className='w-full lg:w-[630px] mx-auto text-center'>
							<h2 className='titles text-black uppercase font-playfair'>
								¡Encuentre su propiedad perfecta ahora!
							</h2>
						</div>
						<div className='w-full lg:w-[800px] mx-auto text-center mb-20'>
							<p className='subtitles text-black font-playfair mb-8'>
								Con nuestra atención personalizada explore nuestros listados
								más recientes y dé el siguiente paso hacia la casa de sus sueños.
							</p>
						</div>
						<div className='w-full lg:w-[660px] mx-auto text-center'>
							<Button text='Ver más' type='primary' position='center' />
						</div>
					</animated.div>
				</div>
			</div>

		</div>
	)
}

export default Proyectos