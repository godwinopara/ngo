interface DonateCardProps {
	title: string;
	desc: string;
	img: string;
	btn?: string;
	className?: string;
	classWrapper?: string;
}

const DonateCard = ({ img, title, desc, className, btn = "Give Now" }: DonateCardProps) => {
	return (
		<div className="bg-white h-[400px] w-full mb-32 lg:mb-0 lg:mr-10 text-center px-6  md:px-20 lg:px-6 py-20 relative last:mr-0">
			<img
				src={img}
				alt=""
				className="absolute w-2/5 md:w-[30%] -top-[20%] md:-top-[25%]  lg:-top-28 left-[28%] "
			/>
			<h3 className="font-bold text-4xl mb-5">{title}</h3>
			<p className={`text-xl mx-auto ${className}`}>{desc}</p>
			<button className="bg-slate-900 text-white py-3 px-8 mt-6 text-lg text-center">{btn}</button>
		</div>
	);
};

export default DonateCard;
