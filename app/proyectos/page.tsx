"use client";
import dynamic from 'next/dynamic';
import Button from '../../components/Button';
import Image from 'next/image';
import Project1 from '../../assets/img/card-1.png';
import Project2 from '../../assets/img/card-2.png';
import Project3 from '../../assets/img/card-3.png';
import Project4 from '../../assets/img/card-4.png';
import Project5 from '../../assets/img/card-5.png';
import Project6 from '../../assets/img/card-6.png';

const Proyectos = () => {

	return (
		<div className='mt-[80px]'>
			<div className='banner-proyectos w-screen bg-cover bg-center pt-[100px]'>
				<div className='home__content'>
					<div className='w-[690px] mb-20'>
						<p className='subtitles text-black font-playfair mb-8'>Explora nuestros desarrollos</p>
						<h2 className='titles text-black font-playfair'>
							Nuestros proyectos, más que espacios,
							son escenarios para nuevas historias
						</h2>
					</div>
				</div>
			</div>

			<div className='w-screen'>
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
			</div>

			<div className='team--custom w-screen'>
				<div className='home__content'>
					<div className='w-[750px] mx-auto text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair'>
							¡Encuentre su propiedad perfecta ahora!
						</h2>
						<p className='subtitles text-black font-playfair mb-8'>
							Con nuestra atención personalizada explore nuestros listados
							más recientes y dé el siguiente paso hacia la casa de sus sueños.
						</p>
					</div>
					<div className='w-[660px] mx-auto text-center my-20'>
						<Button text='Ver más' type='primary' position='center' />
					</div>
				</div>
			</div>

		</div>
	)
}

export default Proyectos