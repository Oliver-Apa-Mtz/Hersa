import Button from './Button';

type FormProps = {
	bgColor?: string
}

const Form = ({ bgColor = 'white' }: FormProps) => {
	return (
		<div className={`w-full ${bgColor === 'gray' ? 'form--Gray' : 'bg-white'} p-4 lg:p-20`}>
			<div className="w-full mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
					<div>
						<label className="text-info text-black font-poppins">Nombre*</label>
						<input
							type="text"
							placeholder="Escribe tu nombre"
							className="bg-transparent w-full border-b-2 border-black text-info text-black font-poppins focus:outline-none placeholder-gray-400 py-2"
						/>
					</div>
					<div>
						<label className="text-info text-black font-poppins">Email*</label>
						<input
							type="email"
							placeholder="Escribe tu mail"
							className="bg-transparent w-full border-b-2 border-black text-info text-black font-poppins focus:outline-none placeholder-gray-400 py-2"
						/>
					</div>
					<div>
						<label className="text-info text-black font-poppins">Teléfono*</label>
						<input
							type="tel"
							placeholder="Escribe tu teléfono"
							className="bg-transparent w-full border-b-2 border-black text-info text-black font-poppins focus:outline-none placeholder-gray-400 py-2"
						/>
					</div>
					<div>
						<label className="text-info text-black font-poppins">Empresa*</label>
						<input
							type="text"
							placeholder="Nombre de la empresa"
							className="bg-transparent w-full border-b-2 border-black text-info text-black font-poppins focus:outline-none placeholder-gray-400 py-2"
						/>
					</div>
				</div>
				<div className="mt-8">
					<label className="text-info text-black font-poppins">Mensaje*</label>
					<textarea
						rows={2}
						placeholder=""
						className={`bg-transparent w-full border-b-2 border-black focus:outline-none placeholder-gray-400 resize-none text-info text-black font-poppins py-2`}
					></textarea>
				</div>
			</div>
			<div className='w-full lg:w-[660px] mx-auto text-center mt-20'>
				<Button text='Enviar' type='primary' position='center' />
			</div>
		</div>
	)
}

export default Form