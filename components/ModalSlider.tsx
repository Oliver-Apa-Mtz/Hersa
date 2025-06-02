'use client'

import { Dialog } from '@headlessui/react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import Images1 from '../assets/img/proyect-1.png';
import Images2 from '../assets/img/detail-1.png';
import Images3 from '../assets/img/detail-2.png';
import Images4 from '../assets/img/detail-3.png';

interface SliderProps {
	isOpen: boolean;
	onClose: () => void;
}

const settings = {
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 10000,
	variableWidth: false,
};

const ModalSlider = ({ isOpen, onClose }: SliderProps) => {
	return (
		<Dialog open={isOpen} onClose={onClose} className="relative z-50">
			<div className="fixed inset-0 bg-black/95" aria-hidden="true" />
			<div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
				<Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-transparent text-left transition-all">
					<div className="bg-transparent p-6 overflow-y-hidden h-[560px]">
						<Slider {...settings}>
							<div>
								<Image src={Images1} alt="" className="w-full h-[max-content]" />
							</div>
							<div>
								<Image src={Images2} alt="" className="w-full h-[max-content]" />
							</div>
							<div>
								<Image src={Images3} alt="" className="w-full h-[max-content]" />
							</div>
							<div>
								<Image src={Images4} alt="" className="w-full h-[max-content]" />
							</div>
						</Slider>
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	)
}

export default ModalSlider;
