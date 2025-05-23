"use client";
import Image from 'next/image';
import Button from '../components/Button';

import '../styles/home.css';

import Logo from '../assets/img/logo-home.png';
import BannerHome from '../assets/img/banner-home.png';
import Images1 from '../assets/img/images-1.png';
import Images2 from '../assets/img/images-2.png';
import Project1 from '../assets/img/card-1.png';
import Project2 from '../assets/img/card-2.png';
import Project3 from '../assets/img/card-3.png';
import Project4 from '../assets/img/card-4.png';
import Project5 from '../assets/img/card-5.png';
import Project6 from '../assets/img/card-6.png';

export default function Home() {

	return (
		<div>
			<div className='home w-screen mt-[80px] pt-[20px] bg-cover bg-center pb-14'>
				<div className='home__content'>
					<div className='flex justify-center items-center mb-[20px]'>
						<Image src={Logo} alt="" className='w-[413px]' />
					</div>
					<div>
						<Image src={BannerHome} alt="" className='' />
						<div>
							<h1 className='home__content__title'>
								<span className='bg-cream'>Construyendo historias en un</span><br />
								<span className='bg-cream'>lugar donde los sueños y la</span><br />
								<span className='bg-cream'>realidad se fusionan.</span>
							</h1>
						</div>
					</div>
				</div>
			</div>

			<div className='banner-secondary w-screen bg-cover bg-center pt-[400px] -mt-[200px] pb-20'>
				<div className='home__content'>
					<div className='w-[660px] mx-auto text-center mb-[450px]'>
						<h2 className='titles text-black'>Inversión inteligente, plusvalía y diseño exclusivo.</h2>
						<p className='subtitles text-black'>Conoce nuestros proyectos</p>
						<Button text='Contáctanos' type='primary' position='center' />
					</div>
					<div className='w-full flex items-center justify-between'>
						<div>
							<Image src={Images1} alt="" className='w-[600px] mb-10' />
							<Image src={Images2} alt="" className='w-[600px]' />
						</div>
						<div className='banner-secondary__text text-right'>
							<h3 className='titles text-black'>¿Quiénes Somos?</h3>
							<h4 className='subtitles text-black'>Construimos más que espacios,<br /> creamos lugares donde los sueños<br /> encuentran su lugar.</h4>
							<p className='text-info text-black'>
								En <b>Hersa</b>, no solo construimos obras: construimos sueños,
								hogares, futuros. Somos una empresa con 15 años de experiencia
								en el mundo de la construcción, respaldada por profesionales
								apasionados que suman más de 30 años creando proyectos con alma,
								propósito y visión.
							</p>
							<p className='text-info text-black'>
								Confiamos en <b>Mazatlán</b>, confiamos en <b>Sinaloa</b> y en un México
								productivo y creativo. Hersa representa a México y a sus jóvenes
								para mejorar un país en constante desarrollo.
							</p>
							<p className='text-info text-black'>
								En <b>Hersa</b>, trabajamos con el corazón, porque sabemos que cada
								ladrillo puede sostener una historia, y cada proyecto puede
								transformar vidas.
							</p>
						</div>
					</div>
					<div>
						<div className='mt-20'>
							<h4 className='subtitles text-black'>Explora nuestros desarrollos</h4>
							<h3 className='titles text-black'>Nuestros proyectos, <br />más que espacios, son escenarios para nuevas historias</h3>
						</div>
					</div>
				</div>
			</div>

			<div className='projects w-screen'>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className='w-[620px] mx-auto relative'>
						<Image src={Project1} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto p-12">
							<h3 className="subtitles text-black mb-2 text-center">Arcángel Distrito Residencial</h3>
							<p className="text-info text-black mb-4">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
					<div className='w-[620px] mx-auto relative'>
						<Image src={Project2} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto p-12">
							<h3 className="subtitles text-black mb-2 text-center">Bik Independencia</h3>
							<p className="text-info text-black mb-4">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
					<div className='w-[620px] mx-auto relative'>
						<Image src={Project3} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto p-12">
							<h3 className="subtitles text-black mb-2 text-center">Bik Independencia</h3>
							<p className="text-info text-black mb-4">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
					<div className='w-[620px] mx-auto relative'>
						<Image src={Project4} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto p-12">
							<h3 className="subtitles text-black mb-2 text-center">Arcángel Distrito Residencial</h3>
							<p className="text-info text-black mb-4">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
					<div className='w-[620px] mx-auto relative'>
						<Image src={Project5} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto p-12">
							<h3 className="subtitles text-black mb-2 text-center">Bik Independencia</h3>
							<p className="text-info text-black mb-4">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
					<div className='w-[620px] mx-auto relative'>
						<Image src={Project6} alt="" className='w-full h-[500px] object-cover' />
						<div className="projects__text bg-blue mx-auto p-12">
							<h3 className="subtitles text-black mb-2 text-center">Bik Independencia</h3>
							<p className="text-info text-black mb-4">
								BIK Independencia es un conjunto de 6 departamentos céntricos,
								semiprivados, distribuidos en 3 niveles de 50m2, cerca de escuelas,
								iglesia, centro, ...
							</p>
							<a href="#" className="text-info text-black">
								VER MÁS <span>→</span>
							</a>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}
