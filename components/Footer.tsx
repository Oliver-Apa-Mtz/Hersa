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
		<footer className="bg-gradient-to-b from-[#1d4d8d] to-[#7ca5c0] text-white py-12 px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
				<div>
					<Link href="/" className="cursor-pointer">
						<Image src={Logo} alt="Logo" className='w-[335px]' />
					</Link>
					<p className="footer__title text-white mt-10 mb-20">
						Detrás de cada sueño hay una historia esperando comenzar.<br />
						En Hersa corporativo construimos realidades
					</p>
					<div className="flex flex-wrap gap-4 text-sm uppercase tracking-widest font-light mt-10">
						<a href="#" className="hover:underline">PATROCINIOS</a>
						<a href="#" className="hover:underline">PROVEEDORES</a>
						<a href="#" className="hover:underline">NOTICIAS</a>
						<a href="#" className="hover:underline">BOLSA DE TRABAJO</a>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-between mb-20 border-b border-white">
						<h3 className="footer__title text-white uppercase">CONTÁCTANOS</h3>
						<span className="text-2xl">→</span>
					</div>
					<div className='flex items-start gap-10'>
						<ul className="">
							<li className="flex items-start gap-2">
								<Image src={Phone} alt="Logo" className='w-[16px] pt-1' />
								<a href="">
									<span className="italic text-[20px]">Teléfono</span><br />
									(33) 669 - 278 - 7717
								</a>
							</li>
							<li className="flex items-start gap-2">
								<Image src={Email} alt="Logo" className='w-[16px] pt-1' />
								<a href="">
									<span className="italic text-[20px]">Correo</span><br />
									contacto@hersamexico.com.mx
								</a>
							</li>
							<li className="flex items-start gap-2">
								<Image src={Map} alt="Logo" className='w-[16px] pt-1' />
								<a href="">
									<span className="italic text-[20px]">Ubicación</span><br />
									Avenida Carnaval 704 Interior Local 8,<br />
									Playa Sur Mazatlán Sinaloa México
								</a>
							</li>
						</ul>
						<div className="flex items-center gap-4">
							<button className="w-8 h-8 rounded-full bg-white text-[#1d4d8d] text-sm font-bold">Tw</button>
							<button className="w-8 h-8 rounded-full border border-white text-sm font-light">Fb</button>
							<button className="w-8 h-8 rounded-full border border-white text-sm font-light">In</button>
							<button className="w-8 h-8 rounded-full border border-white text-sm font-light">Li</button>
						</div>
					</div>
				</div>

			</div>
		</footer>
	)
}

export default Footer