"use client";
import Image from 'next/image';
import Button from '../components/Button';

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

	return (
		<div>
			<div className='home w-screen mt-[80px] pt-[40px] bg-cover bg-center pb-14 relative'>
				<div className='home__content'>
					<div className='flex justify-center items-center mb-[20px]'>
						<Image src={Logo} alt="" className='w-[413px]' />
					</div>
					<div>
						<Image src={BannerHome} alt="" className='' />
						<div>
							<h1 className='home__content__title font-playfair'>
								<span className='bg-cream'>Construyendo historias en un</span><br />
								<span className='bg-cream'>lugar donde los sueños y la</span><br />
								<span className='bg-cream'>realidad se fusionan.</span>
							</h1>
						</div>
					</div>
				</div>
			</div>

			<div className='banner-secondary w-screen bg-cover bg-center pt-[900px] -mt-[600px] pb-20'>
				<div className='home__content'>
					<div className='w-[660px] mx-auto text-center mb-[450px]'>
						<h2 className='titles text-black uppercase font-playfair'>Inversión inteligente, plusvalía y diseño exclusivo.</h2>
						<p className='subtitles text-black font-playfair mb-8'>Conoce nuestros proyectos</p>
						<Button text='Contáctanos' type='primary' position='center' />
					</div>
					<div className='w-full flex items-center justify-between'>
						<div>
							<Image src={Images1} alt="" className='w-[600px] mb-10' />
							<Image src={Images2} alt="" className='w-[600px]' />
						</div>
						<div className='w-full max-w-[515px] text-right'>
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
					</div>
					<div>
						<div className='mt-20'>
							<h4 className='subtitles text-black font-playfair mb-8'>Explora nuestros desarrollos</h4>
							<h3 className='titles text-black font-playfair'>Nuestros proyectos, <br />más que espacios, son escenarios para nuevas historias</h3>
							<div className='flex items-center mt-10 gap-4'>
								<div className='font-poppins rounded-full border border-black px-8 py-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
									<p>Filtro 1</p>
								</div>
								<div className='font-poppins rounded-full border border-black px-8 py-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
									<p>Filtro 2</p>
								</div>
								<div className='font-poppins rounded-full border border-black px-8 py-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
									<p>Filtro 3</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='projects w-screen'>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
					<div className='projects__item mx-auto relative'>
						<Image src={Project1} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto px-12 py-6">
							<h3 className="subtitles text-black text-center font-playfair mb-6">Arcángel Distrito Residencial</h3>
							<p className="text-info text-black mb-2 font-poppins">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black font-poppins">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
					<div className='projects__item mx-auto relative'>
						<Image src={Project2} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto px-12 py-6">
							<h3 className="subtitles text-black text-center font-playfair mb-6">Bik Independencia</h3>
							<p className="text-info text-black mb-2 font-poppins">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black font-poppins">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
					<div className='projects__item mx-auto relative'>
						<Image src={Project3} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto px-12 py-6">
							<h3 className="subtitles text-black text-center font-playfair mb-6">Bik Independencia</h3>
							<p className="text-info text-black mb-2 font-poppins">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black font-poppins">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
					<div className='projects__item mx-auto relative'>
						<Image src={Project4} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto px-12 py-6">
							<h3 className="subtitles text-black text-center font-playfair mb-6">Bik Independencia</h3>
							<p className="text-info text-black mb-2 font-poppins">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black font-poppins">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
					<div className='projects__item mx-auto relative'>
						<Image src={Project5} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto px-12 py-6">
							<h3 className="subtitles text-black text-center font-playfair mb-6">Bik Independencia</h3>
							<p className="text-info text-black mb-2 font-poppins">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black font-poppins">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
					<div className='projects__item mx-auto relative'>
						<Image src={Project6} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto px-12 py-6">
							<h3 className="subtitles text-black text-center font-playfair mb-6">Bik Independencia</h3>
							<p className="text-info text-black mb-2 font-poppins">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black font-poppins">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
				</div>
				<div className='w-[660px] mx-auto text-center my-20'>
					<Button text='Ver más' type='primary' position='center' />
				</div>
			</div>

			<div className='pb-20'>
				<div className='home__content'>
					<div className='w-full flex items-center justify-between'>
						<div className='w-full max-w-[515px] text-left'>
							<h4 className='subtitles text-black font-playfair mb-6'>Lo hacemos posible, lo hacemos contigo</h4>
							<h3 className='titles text-black font-playfair'>Más que servicios, somos aliados en cada etapa de tu proyecto.</h3>
							<div className='mt-10'>
								<p className='text-info text-black uppercase border-b border-gray pb-2 font-poppins'>Proyecto</p>
								<p className='text-info text-black uppercase border-b border-gray pb-2 -mt-2 font-poppins'>CONSTRUCCIÓN</p>
								<p className='text-info text-black uppercase border-b border-gray pb-2 -mt-2 font-poppins'>COMERCIALIZACIÓN DE DESARROLLOS INMOBILIARIOS</p>
								<p className='text-info text-black uppercase border-b border-gray pb-2 -mt-2 font-poppins'>OBRA DE INFRAESTRUCTURA</p>
								<p className='text-info text-black uppercase -mt-2 font-poppins'>EQUIPO DE SEGURIDAD INDUSTRIAL</p>
							</div>
						</div>
						<div>
							<Image src={Images3} alt="" className='w-[600px] mb-10' />
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}
