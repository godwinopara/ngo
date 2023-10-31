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
				<img src={fbi} alt="" className="h-[100px]" />
				<img src={unicef} alt="" className="h-[100px] mr-5" />
				<img src={who} alt="" className="h-[100px] mr-5" />
				<img src={unilever} alt="" className="h-[100px] mr-5" />
				<img src={unitedNation} alt="" className="h-[100px] mr-5" />
				<img src={redCross} alt="" className="h-[100px]" />
				<img src={imf} alt="" className="h-[100px]" />
			</div>
		</section>
	);
};

export default Partners;
