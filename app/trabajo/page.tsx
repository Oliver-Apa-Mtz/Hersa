"use client";
import Image from 'next/image';
import Form from '../../components/Form';
import Logo from '../../assets/img/logo-home.png';

const Trabajo = () => {

	return (
		<div className='mt-[80px]'>
			<div className='banner-patrocinio w-screen bg-cover bg-center pt-[150px] pb-20'>
				<div className='home__content'>
					<div className='w-full lg:w-[1100px] mx-auto text-center mb-20'>
						<div className='flex justify-center items-center mb-[20px]'>
							<Image src={Logo} alt="" className='w-[413px]' />
						</div>
						<h2 className='titles text-black uppercase font-playfair'>Construye tu futuro con nosotros</h2>
						<p className='text-info text-black font-poppins'>
							Nuestro equipo está formado por personas apasionadas por la excelencia, la innovación y el detalle,
							pilares que nos permiten crear proyectos residenciales únicos y de alto nivel.
						</p>
						<p className='subtitles text-black font-playfair'>
							Tu talento transforma espacios
						</p>
					</div>
					<Form bgColor='gray' />
				</div>
			</div>
		</div>
	)
}
export default Trabajo;
