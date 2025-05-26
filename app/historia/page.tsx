"use client";
import Button from '../../components/Button';
import Image from 'next/image';
import Images1 from '../../assets/img/images-4.png';
import Images2 from '../../assets/img/images-5.png';
import Images3 from '../../assets/img/images-6.png';
import Images4 from '../../assets/img/images-7.png';
import Logo from '../../assets/img/logo-footer.png';

const Nosotros = () => {


	return (
		<div className='mt-[80px]'>
			<div className='banner-history w-screen bg-cover bg-center pt-[100px] pb-20'>
				<div className='home__content'>
					<div className='w-[500px] mx-auto text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair'>espacios e ideas que perduran en el tiempo</h2>
						<p className='subtitles text-black font-playfair'>Sobre nuestra historia</p>
					</div>
					<div className='w-full flex items-center justify-between'>
						<div>
							<Image src={Images1} alt="" className='w-[430px] mb-10 ml-10' />
							<div className='flex gap-4'>
								<Image src={Images2} alt="" className='w-[364px] mb-10' />
								<Image src={Images3} alt="" className='w-[215px] mb-10' />
							</div>
						</div>
						<div className='w-full max-w-[535px] text-right'>
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
						</div>
					</div>
				</div>
			</div>

			<div className='banner-image w-screen bg-cover bg-center p-10 flex justify-center items-center'>
				<div className='home__content'>
					<h4 className='text-center text-white font-playfair text-[47px] max-w-[760px] mx-auto font-light leading-[99%]'>
						En HERSA, la calidad no es solo una promesa,
						es un principio rector que guía cada etapa
						de nuestro proceso.
					</h4>
				</div>
			</div>

			<div className='pb-20'>
				<div className='w-[660px] mx-auto text-center my-[100px]'>
					<Button text='Ver más' type='primary' position='center' />
				</div>
				<div className='home__content'>
					<div className='w-full flex items-center justify-between'>
						<div className='w-full max-w-[515px] text-left'>
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
						</div>
						<div>
							<Image src={Images4} alt="" className='w-[600px] mb-10' />
						</div>
					</div>
				</div>

			</div>

			<div className='banner-image--second w-screen bg-cover bg-center p-10 flex justify-center items-center'>
				<div className='home__content'>
					<Image src={Logo} alt="Logo" className='w-[322px] mx-auto mb-10' />
					<h4 className='text-center text-white font-playfair text-[47px] max-w-[760px] mx-auto font-light leading-[99%]'>
						Líderes en soluciones <br />arquitectónicas
					</h4>
				</div>
			</div>

			<div className='w-screen bg-cover bg-center py-20'>
				<div className='home__content'>
					<div className='w-[550px] mx-auto text-center mb-4'>
						<h2 className='titles text-black uppercase font-playfair'>Objetivo</h2>
						<p className='subtitles text-black font-playfair mb-8'>
							Nuestro objetivo es claro: continuar siendo
							líderes en soluciones arquitectónicas
						</p>
					</div>
					<div className='w-full mx-auto text-center mb-[100px]'>
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
					</div>
				</div>
			</div>

			<div className='team w-screen'>
				<div className='home__content'>
					<div className='w-[750px] mx-auto text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair'>Equipo de trabajo</h2>
						<p className='subtitles text-black font-playfair mb-8'>
							Nuestro equipo es la fuerza que da vida a cada proyecto,
							experiencia y detalle en soluciones que inspiran.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-10 place-items-center">
					<div className='teams__item relative w-[320px]'>
						<div className='bg-blue w-[255px] h-[300px] mx-auto'></div>
						<div className="team__text text-center p-4">
							<p className="text-info text-black font-poppins">
								Cargo en la empresa
							</p>
							<h3 className="subtitles text-black text-center font-playfair mb-6">
								Nombre de la persona
							</h3>
						</div>
					</div>
					<div className='teams__item relative w-[320px]'>
						<div className='bg-blue w-[255px] h-[300px] mx-auto'></div>
						<div className="team__text text-center p-4">
							<p className="text-info text-black font-poppins">
								Cargo en la empresa
							</p>
							<h3 className="subtitles text-black text-center font-playfair mb-6">
								Nombre de la persona
							</h3>
						</div>
					</div>
					<div className='teams__item relative w-[320px]'>
						<div className='bg-blue w-[255px] h-[300px] mx-auto'></div>
						<div className="team__text text-center p-4">
							<p className="text-info text-black font-poppins">
								Cargo en la empresa
							</p>
							<h3 className="subtitles text-black text-center font-playfair mb-6">
								Nombre de la persona
							</h3>
						</div>
					</div>
					<div className='teams__item relative w-[320px]'>
						<div className='bg-blue w-[255px] h-[300px] mx-auto'></div>
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
