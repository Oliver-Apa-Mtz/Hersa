import Image from 'next/image';

interface ProjectCardProps {
	imageSrc: string;
	title: string;
	description: string;
	onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, onClick }) => {
	return (
		<div className="projects__item mx-auto relative">
			<Image
				src={imageSrc}
				alt={title}
				width={800}
				height={500}
				className="w-full h-[300px] md:h-[500px] object-cover"
			/>
			<div className="projects__text bg-blue mx-auto px-4 md:px-8 py-6">
				<h3 className="subtitles text-black text-center font-playfair mb-4">{title}</h3>
				<p className="text-info text-black mb-2 font-poppins">{description}</p>
				<button
					onClick={onClick}
					className="flex gap-2 hover:gap-4 text-info text-black font-poppins transition-all duration-300"
				>
					VER MÁS <span>→</span>
				</button>
			</div>
		</div>
	);
};
export default ProjectCard;
