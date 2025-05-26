"use client";
import dynamic from 'next/dynamic';
import Button from '../../components/Button';

const Contacto = () => {

	return (
		<div className='mt-[80px]'>
			<div className='contact w-screen bg-cover bg-center pt-[100px] pb-20'>
				<div className='home__content'>
					<div className='w-[750px] mx-auto text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair'>¿Algo en mente? hablemos</h2>
						<p className='subtitles text-black font-playfair'>
							Póngase en contacto con nuestro equipo para obtener
							rápida respuestas a sus dudas
						</p>
					</div>
					<div className='w-full min-h-[500px] bg-white'>

					</div>
				</div>
			</div>

		</div>
	)
}

export default Contacto