import emergency from "../images/emergency.webp";
import healthservice from "../images/healthservice.webp";
import medicalsecurity from "../images/medicalsecurity.webp";

const Services = () => {
	return (
		<section className="max-w-4xl mx-auto py-20 text-center">
			<div></div>
			<div>
				<h2 className="text-4xl px-5 lg:text-5xl leading-tight font-extrabold  text-slate-800">
					HumanityFirst saves lives and improves health for people affected by poverty or disaster
					so they can reach their <span className="text-red-600">full potential.</span>
				</h2>
				<p className="text-xl mt-3 w-9/12 mx-auto">
					Health is both essential and a human right. With good health, they can attend school, be
					productive at work, care for their families and contribute to strong communities. Poor
					health puts all of those opportunities at risk. Health is fundamental to all aspects of
					development.
				</p>
			</div>
			<div className="px-5 lg:px-0 lg:flex items-center my-10">
				<div className="mb-10 lg:mb-0 lg:mr-10 w-full border p-5">
					<img src={emergency} alt="emergency service" />
					<h3 className="bg-[#efefef] py-4 px-5 font-bold">Emergency Response</h3>
				</div>
				<div className="mb-10 lg:mr-10 w-full border p-5">
					<img src={medicalsecurity} alt="medical security" />
					<h3 className="bg-[#efefef] py-4 px-5 font-bold">Medical Security</h3>
				</div>
				<div className="mb-10 lg:mb-0 w-full border p-5">
					<img src={healthservice} alt="health service" />
					<h3 className="bg-[#efefef] py-4 px-5 font-bold">Health Service</h3>
				</div>
			</div>
		</section>
	);
};

export default Services;
