"use client";
import Button from '../../../components/Button';
import Image from 'next/image';
import Images1 from '../../../assets/img/proyect-1.png';
import Images2 from '../../../assets/img/proyect-2.png';
import Images3 from '../../../assets/img/proyect-3.png';

const Proyecto = () => {


	return (
		<div className='mt-[80px]'>
			<div className='banner-proyectos w-screen bg-cover bg-center pt-[150px] pb-20'>
				<div className='home__content'>
					<div>
						<nav className="text-sm mb-4 text-gray-600">
							<a href="#" className="hover:underline">Listado de propiedades</a> /
							<span className="text-gray-800">Casa familiar moderna</span>
						</nav>
					</div>
					<div className='w-full text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair'>ARCANGEL DISTRITO RESIDENCIAL</h2>
						<p className='subtitles text-black font-playfair'>By HERSA CORPORATIVO</p>
					</div>
					<div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
							<Image src={Images1} alt="" className='w-[660px] object-cover' />
							<div className="flex flex-wrap gap-4 relative">
								<div>
									<Image src={Images2} alt="" className='w-[600px] object-cover' />
								</div>
								<div>
									<Image src={Images3} alt="" className='w-[450px] object-cover' />
									<div className="absolute bottom-[70px] right-10 text-black text-[80px] font-playfair">10+</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
export default Proyecto;
