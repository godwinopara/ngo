const Catelog = () => {
	return (
		<section className="lg:grid lg:grid-cols-2 items-center">
			<div>
				<div className="h-screen flex items-center justify-center bg-hawaii bg-center bg-cover relative">
					<div className="absolute h-full  w-full bg-black opacity-50"></div>
					<div className="text-white z-10 relative text-center">
						<h4 className=" text-3xl text-amber-400 mb-6">EMERGENCY RESPONSE</h4>
						<h2 className="font-extrabold text-5xl">Responding to Hawaii WildFires</h2>
						<button className="bg-red-800 py-5 px-10 mt-6 text-xl">OUR RESPONSE</button>
					</div>
				</div>
			</div>
			<div>
				<div className="h-screen flex items-center justify-center bg-turkey bg-center bg-cover relative">
					<div className="absolute h-full w-full bg-black opacity-40"></div>
					<div className="text-white z-10 relative text-center">
						<h4 className=" text-3xl text-amber-400 mb-6">SURVIVORS IN NEED</h4>
						<h2 className="font-extrabold text-5xl">
							Türkiye/Syria
							<br />
							Earthquake
						</h2>
						<button className="bg-red-800 py-5 px-10 mt-6 text-xl">OUR RESPONSE</button>
					</div>
				</div>
			</div>
			<div className="lg:col-span-2">
				<div className="h-[95vh] bg-hawaii2 bg-center bg-cover relative">
					<div className="absolute h-full w-full bg-black opacity-40"></div>
					<div className=" w-full px-10 lg:px-0 absolute bottom-20 lg:left-10 -z-0  bg-slate-600 opacity-80 h-auto min-h-[400px] lg:w-[500px]"></div>
					<div className="absolute bottom-40  left-10 lg:left-[140px] text-white  lg:text-center">
						<h2 className="font-extrabold text-4xl z-10 relative tracking-wide">
							Ready for the
							<br />
							Danger Season?
						</h2>
						<p className="mt-5 mb-5 text-3xl">Get Ready Now</p>
						<button className="bg-red-800 py-5 px-10 mt-6 text-xl">OUR RESPONSE</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Catelog;
