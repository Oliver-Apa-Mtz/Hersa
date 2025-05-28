"use client";
import dynamic from 'next/dynamic';
import Button from '../../components/Button';

const Contacto = () => {

	return (
		<div className='mt-[80px]'>
			<div className='contact w-screen bg-cover bg-center pt-[150px] pb-20 mb-10 lg:mb-[200px]'>
				<div className='home__content'>
					<div className='w-full lg:w-[750px] mx-auto text-center mb-20'>
						<h2 className='titles text-black uppercase font-playfair'>¿Algo en mente? hablemos</h2>
						<p className='subtitles text-black font-playfair'>
							Póngase en contacto con nuestro equipo para obtener
							rápida respuestas a sus dudas
						</p>
					</div>
					<div className='w-full bg-white p-4 lg:p-20'>
						<div className="w-full mx-auto">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
								<div>
									<label className="text-info text-black font-poppins">Nombre*</label>
									<input
										type="text"
										placeholder="Escribe tu nombre"
										className="w-full border-b-2 border-black text-info text-black font-poppins focus:outline-none placeholder-gray-400 py-2"
									/>
								</div>
								<div>
									<label className="text-info text-black font-poppins">Email*</label>
									<input
										type="email"
										placeholder="Escribe tu mail"
										className="w-full border-b-2 border-black text-info text-black font-poppins focus:outline-none placeholder-gray-400 py-2"
									/>
								</div>
								<div>
									<label className="text-info text-black font-poppins">Teléfono*</label>
									<input
										type="tel"
										placeholder="Escribe tu teléfono"
										className="w-full border-b-2 border-black text-info text-black font-poppins focus:outline-none placeholder-gray-400 py-2"
									/>
								</div>
								<div>
									<label className="text-info text-black font-poppins">Empresa*</label>
									<input
										type="text"
										placeholder="Nombre de la empresa"
										className="w-full border-b-2 border-black text-info text-black font-poppins focus:outline-none placeholder-gray-400 py-2"
									/>
								</div>
							</div>
							<div className="mt-8">
								<label className="text-info text-black font-poppins">Mensaje*</label>
								<textarea
									rows={2}
									placeholder=""
									className="w-full border-b-2 border-black focus:outline-none placeholder-gray-400 resize-none text-info text-black font-poppins py-2"
								></textarea>
							</div>
						</div>
						<div className='w-full lg:w-[660px] mx-auto text-center mt-20'>
							<Button text='Enviar' type='primary' position='center' />
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Contacto