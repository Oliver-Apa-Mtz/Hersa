import React from 'react';
import Slider from 'react-slick';

interface ModalSliderProps {
	isOpen: boolean;
	onClose: () => void;
	images: string[];
}

const ModalSlider: React.FC<ModalSliderProps> = ({ isOpen, onClose, images }) => {
	if (!isOpen) return null;

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 10000,
		variableWidth: true,
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
			<div className="relative max-w-[100vw] w-vw">
				<Slider {...settings}>
					{images.map((src, index) => (
						<div key={index} className="flex justify-center" style={{ width: '100vw' }}>
							<img src={src} alt={`slide-${index}`} className="w-[500px] object-contain" />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default ModalSlider;
