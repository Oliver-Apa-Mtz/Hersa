interface IProps {
	text: string;
	type: string;
	position?: string;
}
const Button = ({ text, type, position = 'center' }: IProps) => {
	return (
		<div className={`flex items-center ${position === 'center' ? 'justify-center' : position === 'right' ? 'lg:justify-end justify-center' : 'lg:justify-start justify-center'}`}>
			<div className={`button button--${type} cursor-pointer`}>
				<div className='text-center font-poppins'>
					{text}
				</div>
			</div>
		</div>
	)
}

export default Button