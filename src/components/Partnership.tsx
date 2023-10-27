import DonateCard from "./DonateCard";
import monthly from "../images/monthly.png";
import donors from "../images/donors.png";
import onetime from "../images/onetime.png";

const Partnership = () => {
	return (
		<section className="bg-partnership bg-center lg:bg-top bg-cover px-5 lg:px-0">
			<div className="min-h-screen flex items-center mb-20">
				<div className="lg:w-1/2 my-auto  text-white text-center">
					<h2 className="font-extrabold text-5xl mb-5">
						<span className="text-amber-500">Easy Ways </span>to <br />
						Get Involved Now!
					</h2>
					<p className="lg:w-3/4 mx-auto text-lg">
						Give health to a child, a parent, a community. Your gift makes it possible for
						<strong> HumanityFirst </strong>
						to get medicine and <strong>Critical Care</strong> to families and communities in need.
						For every $1 donated,<strong>HumanityFirst</strong> can provide $20 in aid. Because we
						deliver donated medicine and medical supplies to a trusted network of locally-based
						providers, the impact of your gift is multiplied many times over.
					</p>
					<button className="bg-red-800 py-5 px-10 mt-6 text-xl">Learn More</button>
				</div>
			</div>
			<div className="lg:mx-10 pb-10 lg:flex justify-between items-start">
				<DonateCard
					img={onetime}
					title="Give A One-Time Gift."
					desc="Send medicines & aid to those in need."
					className="w-1/2"
				/>
				<DonateCard
					img={monthly}
					title="Give Monthly."
					desc="Let us do the work for you. Become a Hero for Health."
				/>
				<DonateCard
					img={donors}
					title="Put Your Donor Advised Fund to Work"
					desc="Your DAF is a convenient way to support vulnerable families all over the world."
					className="mb-5"
				/>
			</div>
		</section>
	);
};

export default Partnership;
