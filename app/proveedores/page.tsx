"use client";
import Image from 'next/image';
import Form from '../../components/Form';
import Images1 from '../../assets/img/images-9.png';
import Logo from '../../assets/img/logo-home.png';

const Proovedores = () => {

	return (
		<div className='mt-[80px]'>
			<div className='banner-proveedores w-screen bg-cover bg-center pt-[150px] pb-20'>
				<div className='home__content'>
					<div className='w-full lg:flex items-center justify-between'>
						<div>
							<Image src={Images1} alt="" className='w-[600px] mb-10 mx-auto lg:ml-10' />
						</div>
						<div className='w-full max-w-[535px] text-center lg:text-right mx-auto lg:mx-0 mt-20 lg:mt-0'>
							<div className='flex justify-center items-center mb-[20px]'>
								<Image src={Logo} alt="" className='w-[413px]' />
							</div>
							<h3 className='titles text-black uppercase font-playfair'>
								en hersa la excelencia se construye en conjunto
							</h3>
							<h4 className='text-info text-black font-poppins'>
								Trabajamos de la mano con una red selecta de partners
								estratégicos que comparten nuestra visión de calidad,
								innovación y compromiso.
							</h4>
							<p className='subtitles text-black font-playfair'>Estos son nuestros Proveedores ¡Conócelos!</p>
						</div>
					</div>
				</div>
			</div>

			<div className='w-screen bg-cover bg-center pt-[150px] pb-20 mb-10'>
				<div className='home__content'>
					<div className='w-full lg:w-[1100px] mx-auto text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair'>Se parte de nuestros valores</h2>
						<p className='subtitles text-black font-playfair'>
							Póngase en contacto con nuestro equipo
						</p>
					</div>
					<Form bgColor='gray' />
				</div>
			</div>

		</div>
	)
}
export default Proovedores;
