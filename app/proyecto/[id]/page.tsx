"use client";
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import Image from 'next/image';
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

const Proyecto = () => {


	return (
		<div className='mt-[80px]'>
			<div className='banner-proyectos w-screen bg-cover bg-center pt-[100px]'>
				<div className='home__content'>
					<div className='mb-10'>
						<nav className="mb-4 flex gap-2">
							<a href="#" className="text-blue font-poppins">Listado de propiedades</a> /
							<span className="text-black font-poppins">Casa familiar moderna</span>
						</nav>
					</div>
					<div className='w-full text-center mb-10'>
						<h2 className='titles text-black uppercase font-playfair'>ARCANGEL DISTRITO RESIDENCIAL</h2>
						<p className='subtitles text-black font-playfair'>by HERSA corporativo</p>
					</div>
					<div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
							<Image src={Images1} alt="" className='w-[660px] object-cover' />
							<div className="flex flex-wrap gap-4 relative">
								<div>
									<Image src={Images2} alt="" className='w-[600px] object-cover' />
								</div>
								<div>
									<Image src={Images3} alt="" className='w-[410px] object-cover' />
									<div className="absolute bottom-[70px] right-10 text-black text-[80px] font-playfair">10+</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='w-screen'>
				<div className='home__content'>
					<div className="flex justify-between gap-4 flex-wrap">
						<div className='w-full lg:w-[71%] max-w-[900px]'>
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
							<p className='subtitles text-black font-playfair mb-6 mt-12'>Información de la propiedad</p>
							<div className='flex flex-wrap justify-between'>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Tipo de servicio</p>
									<p className='text-black font-poppins'>Propiedad residencial</p>
								</div>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Tamaño del terreno</p>
									<p className='text-black font-poppins'>6,500 m2</p>
								</div>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Área/Metraje</p>
									<p className='text-black font-poppins'>900 m2</p>
								</div>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Año de construcción</p>
									<p className='text-black font-poppins'>2015</p>
								</div>
							</div>
							<p className='subtitles text-black font-playfair mb-6 mt-12'>Detalles de la propiedad</p>
							<div className='flex flex-wrap justify-between'>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Habitaciones</p>
									<p className='text-black font-poppins'>3 Habitaciones</p>
								</div>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Mobiliario</p>
									<p className='text-black font-poppins'>Semi-amueblado</p>
								</div>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Baños</p>
									<p className='text-black font-poppins'>2 Baños</p>
								</div>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Mobiliario</p>
									<p className='text-black font-poppins'>Cocina moderna abierta</p>
								</div>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Cochera/estacionamiento</p>
									<p className='text-black font-poppins'>2 cocheras</p>
								</div>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Espacio al aire libre</p>
									<p className='text-black font-poppins'>Patio trasero privado con patio.</p>
								</div>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Climatización</p>
									<p className='text-black font-poppins'>Aire acondicionado</p>
								</div>
								<div className='border-b border-blue w-full md:w-[48%] flex justify-between py-2'>
									<p className='text-blue font-poppins'>Piso</p>
									<p className='text-black font-poppins'>Baldosas de madera y cerámica</p>
								</div>
							</div>
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
								<div className='text-center sm:text-left'>
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
						</div>
						<div className='w-full lg:w-[26%] max-w-[310px] mx-auto lg:mx-0'>
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
			</div>

			<div className='w-screen bg-cover bg-center pt-[150px] pb-20 mb-10 lg:mb-[200px]'>
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

		</div>
	)
}
export default Proyecto;
