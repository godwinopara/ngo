import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Success = () => {
	return (
		<div className="absolute top-0  h-screen max-w-[1000px] w-full flex items-center justify-center">
			<div className="bg-white shadow-xl h-[200px] w-[400px] flex flex-col items-center justify-center">
				<div className="text-center">
					<div className="flex justify-center">
						<FaCheck className="text-green-700 text-center block text-4xl" />
					</div>
					<h2 className="mt-3 text-2xl">Application Submitted</h2>
					<Link
						to="/"
						className="bg-red-600 text-white h-10 flex items-center justify-center font-semibold text-xl mt-3"
					>
						Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Success;
