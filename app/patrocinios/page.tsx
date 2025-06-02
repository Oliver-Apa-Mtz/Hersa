"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
const Form = dynamic(() => import('../../components/Form'), {
	ssr: true,
});

import Images1 from '../../assets/img/images-9.png';
import Logo from '../../assets/img/logo-home.png';
import Icon1 from '../../assets/img/patrocinios/image-1.png';
import Icon2 from '../../assets/img/patrocinios/image-2.png';
import Icon3 from '../../assets/img/patrocinios/image-3.png';
import Icon4 from '../../assets/img/patrocinios/image-4.png';
import Icon5 from '../../assets/img/patrocinios/image-5.png';
import Icon6 from '../../assets/img/patrocinios/image-6.png';
import Icon7 from '../../assets/img/patrocinios/image-7.png';
import Icon8 from '../../assets/img/patrocinios/image-8.png';
import Icon9 from '../../assets/img/patrocinios/image-9.png';
import Icon10 from '../../assets/img/patrocinios/image-10.png';
import Icon11 from '../../assets/img/patrocinios/image-11.png';
import Icon12 from '../../assets/img/patrocinios/image-12.png';
import Icon13 from '../../assets/img/patrocinios/image-13.png';
import Icon14 from '../../assets/img/patrocinios/image-14.png';
import Icon15 from '../../assets/img/patrocinios/image-15.png';
import Icon16 from '../../assets/img/patrocinios/image-16.png';
import Icon17 from '../../assets/img/patrocinios/image-17.png';
import Icon18 from '../../assets/img/patrocinios/image-18.png';
import Icon19 from '../../assets/img/patrocinios/image-19.png';
import Icon20 from '../../assets/img/patrocinios/image-20.png';
import Icon21 from '../../assets/img/patrocinios/image-21.png';
import Icon22 from '../../assets/img/patrocinios/image-22.png';
import Icon23 from '../../assets/img/patrocinios/image-23.png';
import Icon24 from '../../assets/img/patrocinios/image-24.png';
import Icon25 from '../../assets/img/patrocinios/image-25.png';
import Icon26 from '../../assets/img/patrocinios/image-26.png';
import Icon27 from '../../assets/img/patrocinios/image-27.png';
import Icon28 from '../../assets/img/patrocinios/image-28.png';
import Icon29 from '../../assets/img/patrocinios/image-29.png';
import Icon30 from '../../assets/img/patrocinios/image-30.png';

const Patrocinio = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateX(0)' : 'translateX(100px)',
		delay: 200,
	});

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1023);
		};
		handleResize();
		setIsVisible(true);
		setIsVisibleBanner2(true);
	}, []);

	return (
		<div className='mt-[80px]'>
			<div className='banner-proveedores w-screen bg-cover bg-center pt-[150px] pb-20'>
				<div className='home__content'>
					<div className='w-full lg:flex items-center justify-between'>
						<div>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<Image src={Images1} alt="" className='w-[600px] mb-10 mx-auto lg:ml-10' />
							</animated.div>
						</div>
						<div className='w-full max-w-[535px] text-center lg:text-right mx-auto lg:mx-0 mt-20 lg:mt-0'>
							<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
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
							</animated.div>
						</div>
					</div>
				</div>
			</div>

			<div className='w-screen bg-cover bg-center pt-[50px]'>
				<div className='home__content'>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-10 justify-items-center p-4">
						<Image src={Icon1} alt="Patrocinio 1" className="w-[227px] h-[max-content]" />
						<Image src={Icon2} alt="Patrocinio 2" className="w-[126px] h-[max-content]" />
						<Image src={Icon3} alt="Patrocinio 3" className="w-[152px] h-[max-content]" />
						<Image src={Icon4} alt="Patrocinio 4" className="w-[122px] h-[max-content]" />
						<Image src={Icon5} alt="Patrocinio 5" className="w-[108px] h-[max-content]" />

						<Image src={Icon6} alt="Patrocinio 6" className="w-[128px] h-[max-content]" />
						<Image src={Icon7} alt="Patrocinio 7" className="w-[144px] h-[max-content]" />
						<Image src={Icon8} alt="Patrocinio 8" className="w-[85px] h-[max-content]" />
						<Image src={Icon9} alt="Patrocinio 9" className="w-[73px] h-[max-content]" />
						<Image src={Icon10} alt="Patrocinio 10" className="w-[62px] h-[max-content]" />

						<Image src={Icon11} alt="Patrocinio 11" className="w-[73px] h-[max-content]" />
						<Image src={Icon12} alt="Patrocinio 12" className="w-[89px] h-[max-content]" />
						<Image src={Icon13} alt="Patrocinio 13" className="w-[71px] h-[max-content]" />
						<Image src={Icon14} alt="Patrocinio 14" className="w-[126px] h-[max-content]" />
						<Image src={Icon15} alt="Patrocinio 15" className="w-[91px] h-[max-content]" />

						<Image src={Icon16} alt="Patrocinio 16" className="w-[96px] h-[max-content]" />
						<Image src={Icon17} alt="Patrocinio 17" className="w-[88px] h-[max-content]" />
						<Image src={Icon18} alt="Patrocinio 18" className="w-[110px] h-[max-content]" />
						<Image src={Icon19} alt="Patrocinio 19" className="w-[95px] h-[max-content]" />
						<Image src={Icon20} alt="Patrocinio 20" className="w-[212px] h-[max-content]" />

						<Image src={Icon21} alt="Patrocinio 21" className="w-[119px] h-[max-content]" />
						<Image src={Icon22} alt="Patrocinio 22" className="w-[135px] h-[max-content]" />
						<Image src={Icon23} alt="Patrocinio 23" className="w-[122px] h-[max-content]" />
						<Image src={Icon24} alt="Patrocinio 24" className="w-[149px] h-[max-content]" />
						<Image src={Icon25} alt="Patrocinio 25" className="w-[103px] h-[max-content]" />

						<Image src={Icon26} alt="Patrocinio 26" className="w-[138px] h-[max-content]" />
						<Image src={Icon27} alt="Patrocinio 27" className="w-[125px] h-[max-content]" />
						<Image src={Icon28} alt="Patrocinio 28" className="w-[120px] h-[max-content]" />
						<Image src={Icon29} alt="Patrocinio 29" className="w-[134px] h-[max-content]" />
						<Image src={Icon30} alt="Patrocinio 30" className="w-[111px] h-[max-content]" />
					</div>
				</div>
			</div>

			<div className='w-screen bg-cover bg-center pt-[150px] pb-20 mb-10'>
				<div className='home__content'>
					<div className='w-full lg:w-[1100px] mx-auto text-center mb-20'>
						<h2 className='titles titles--lessMargin text-black uppercase font-playfair'>Se parte de nuestros valores</h2>
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
export default Patrocinio;
