interface IProps {
	text: string;
	type: string;
	position?: string;
	isFull?: boolean;
}
const Button = ({ text, type, position = 'center', isFull }: IProps) => {
	return (
		<div className={`flex items-center ${position === 'center' ? 'justify-center' : position === 'right' ? 'lg:justify-end justify-center' : 'lg:justify-start justify-center'}`}>
			<div className={`button button--${type} cursor-pointer ${isFull ? 'w-full' : ''}`}>
				<div className='text-center font-poppins'>
					{text}
				</div>
			</div>
		</div>
	)
}

export default Button