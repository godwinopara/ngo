import { Link } from "react-router-dom";

const Catelog = () => {
	return (
		<section className="lg:grid lg:grid-cols-2 items-center">
			<div>
				<div className="h-screen flex items-center justify-center bg-afghanistan bg-center bg-cover relative md:px-20 lg:px-0">
					<div className="absolute h-full  w-full bg-black opacity-50"></div>
					<div className="text-white z-10 relative text-center">
						<h4 className=" text-3xl text-amber-400 mb-6">Catastrophic Disaster</h4>
						<h2 className="font-extrabold text-4xl md:text-5xl">
							Responding to <br /> Afghanistan Earthquake
						</h2>
						<Link to="/crisis/afghanistan">
							<button className="bg-red-800 py-5 px-10 mt-6 text-xl">OUR RESPONSE</button>
						</Link>
					</div>
				</div>
			</div>
			<div>
				<div className="h-screen flex items-center justify-center bg-turkey bg-center bg-cover relative">
					<div className="absolute h-full w-full bg-black opacity-40"></div>
					<div className="text-white z-10 relative text-center">
						<h4 className=" text-3xl text-amber-400 mb-6">SURVIVORS IN NEED</h4>
						<h2 className="font-extrabold text-4xl md:text-5xl">
							Türkiye/Syria
							<br />
							Earthquake
						</h2>
						<Link to="/crisis/turkey">
							<button className="bg-red-800 py-5 px-10 mt-6 text-xl">OUR RESPONSE</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Catelog;
