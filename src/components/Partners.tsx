import fbi from "../images/fbi.jpg";
import unicef from "../images/unicef.jpg";
import who from "../images/who.jpg";
import unilever from "../images/unilever.jpg";
import unitedNation from "../images/united-nation.jpg";
import redCross from "../images/red-cross.jpg";
import imf from "../images/imf.jpg";

const Partners = () => {
	return (
		<section className="px-5 md:px-20 py-10 lg:py-0 lg:px-0 text-center my-20  mx-auto">
			<h1 className="font-bold text-4xl mb-10 text-red-900">Our Partners</h1>
			<div className="flex justify-between items-center">
				<img src={fbi} alt="" className="w-[15%] mr-5" />
				<img src={unicef} alt="" className="w-[10%] mr-5" />
				<img src={who} alt="" className="w-[15%] mr-5" />
				<img src={unilever} alt="" className="w-[15%] mr-5" />
				<img src={unitedNation} alt="" className="w-[15%] mr-5" />
				<img src={redCross} alt="" className="w-[15%]" />
				<img src={imf} alt="" className="w-[10%]" />
			</div>
		</section>
	);
};

export default Partners;
