import fbi from "../images/fbi.jpg";
import unicef from "../images/unicef.jpg";
import who from "../images/who.jpg";

const Partners = () => {
	return (
		<section className="px-5 md:px-20 py-10 lg:py-0 lg:px-0 text-center my-20 max-w-[1000px] mx-auto">
			<h1 className="font-bold text-4xl mb-10 text-red-900">Our Partners</h1>
			<div className="flex justify-between items-center">
				<img src={fbi} alt="" className="w-[25%]" />
				<img src={unicef} alt="" className="w-[25%]" />
				<img src={who} alt="" className="w-[25%]" />
			</div>
		</section>
	);
};

export default Partners;
