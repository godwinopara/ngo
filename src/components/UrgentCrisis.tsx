import { Link } from "react-router-dom";

const UrgentCrisis = () => {
	return (
		<div className="bg-red-600">
			<div className="flex flex-col text-center  lg:flex-row lg:text-left justify-center items-center py-4 text-white">
				<p className="text-2xl mr-5 font-extrabold">
					<span className="underline">Isreal/Gaza Crisis</span>: SoulsAid Global is Responding
				</p>
				<Link to="/application">
					<button className="mt-5 lg:mt-0 bg-slate-900 text-white text-xl font-semibold py-4 px-8">
						Apply Now
					</button>
				</Link>
			</div>
		</div>
	);
};

export default UrgentCrisis;
