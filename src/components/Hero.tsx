const Hero = () => {
	return (
		<div className="relative">
			<div className="min-h-screen bg-hero-bg bg-no-repeat bg-cover"></div>
			<div className="absolute bottom-20 left-5 -z-0  bg-slate-600 opacity-80 h-auto min-h-[500px] lg:w-96"></div>
			<div className="absolute bottom-40 left-16  text-white  text-center">
				<h2 className="font-extrabold text-5xl z-10 relative tracking-wide">
					Finding <br />
					Families <br />
					a Safe Space <br />
					for Health
				</h2>
				<p className="mt-5 text-2xl">War in Ukraine</p>
				<button className="bg-red-800 py-5 px-10 mt-6 text-xl">OUR RESPONSE</button>
			</div>
		</div>
	);
};

export default Hero;
