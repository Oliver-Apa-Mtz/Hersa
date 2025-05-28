"use client";
import '../styles/footer.css';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/img/logo-footer.png';
import Phone from '../assets/img/phone.svg';
import Email from '../assets/img/email.svg';
import Map from '../assets/img/map.svg';

const Footer = () => {
	return (
		<footer className="footer text-white">
			<div className="footer__content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
				<div className='lg:pr-10'>
					<Link href="/" className="cursor-pointer">
						<Image src={Logo} alt="Logo" className='w-[335px] mx-auto lg:mx-0' />
					</Link>
					<p className="footer__title text-white my-10 font-playfair">
						Detrás de cada sueño hay una historia esperando comenzar.<br />
						En Hersa corporativo construimos realidades
					</p>
					<div className="flex flex-wrap gap-4 text-sm uppercase tracking-widest font-light mt-10 justify-center lg:justify-start">
						<a href="#" className="hover:underline font-poppins">PATROCINIOS</a>
						<a href="#" className="hover:underline font-poppins">PROVEEDORES</a>
						<a href="#" className="hover:underline font-poppins">NOTICIAS</a>
						<a href="#" className="hover:underline font-poppins">BOLSA DE TRABAJO</a>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-between mb-10 lg:mb-20 border-b border-white mt-10 lg:mt-0 max-w-[400px] lg:max-w-[100%] mx-auto">
						<h3 className="footer__title text-white uppercase font-playfair">CONTÁCTANOS</h3>
						<span className="text-2xl">→</span>
					</div>
					<div className='xl:flex items-start gap-10'>
						<ul className='footer__info'>
							<li className="flex items-start gap-2 mb-4">
								<Image src={Phone} alt="Logo" className='w-[16px] pt-2' />
								<a href="" className='font-poppinsLight text-[14px]'>
									<span className="italic text-[20px] font-playfair">Teléfono</span><br />
									(33) 669 - 278 - 7717
								</a>
							</li>
							<li className="flex items-start gap-2 mb-4">
								<Image src={Email} alt="Logo" className='w-[16px] pt-2' />
								<a href="" className='font-poppinsLight text-[14px]'>
									<span className="italic text-[20px] font-playfair">Correo</span><br />
									contacto@hersamexico.com.mx
								</a>
							</li>
							<li className="flex items-start gap-2 mb-4">
								<Image src={Map} alt="Logo" className='w-[16px] pt-2' />
								<a href="" className='font-poppinsLight text-[14px]'>
									<span className="italic text-[20px] font-playfair">Ubicación</span><br />
									Avenida Carnaval 704 Interior Local 8,<br />
									Playa Sur Mazatlán Sinaloa México
								</a>
							</li>
						</ul>
						<div className="mt-10 xl:mt-0 flex items-center gap-4 justify-center lg:justify-start">
							<button className="footer__item__social rounded-full border border-white text-sm font-bold font-poppins">Tw</button>
							<button className="footer__item__social rounded-full border border-white text-sm font-bold font-poppins">Fb</button>
							<button className="footer__item__social rounded-full border border-white text-sm font-bold font-poppins">In</button>
							<button className="footer__item__social rounded-full border border-white text-sm font-bold font-poppins">Li</button>
						</div>
					</div>
				</div>

			</div>
		</footer>
	)
}

export default Footer