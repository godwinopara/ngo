import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="relative">
			<div className="min-h-[70vh] lg:min-h-screen bg-hero-bg bg-no-repeat bg-cover"></div>
			<div className="absolute bottom-20 left-5 -z-0  bg-slate-600 opacity-80 h-auto min-h-[500px] md:w-96"></div>
			<div className="absolute bottom-40 left-8 lg:left-16  text-white  text-center">
				<div>
					<h2 className="font-extrabold text-5xl z-10 relative tracking-wide">
						Isreal/Graza <br />
						Crisis <br />
					</h2>
					<p className="mt-5 text-2xl">Humanitarian needs intensify</p>
					<Link to="/crisis/isreal">
						<button className="bg-red-800 py-5 px-10 mt-6 text-xl">OUR RESPONSE</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
