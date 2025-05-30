"use client";
import dynamic from 'next/dynamic';
import Button from '../../components/Button';
import Form from '../../components/Form';

const Contacto = () => {

	return (
		<div className='mt-[80px] bgPpalCream'>
			<div className='contact w-screen bg-cover bg-center pt-[150px] pb-20 lg:pb-[280px]'>
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

export default Contacto