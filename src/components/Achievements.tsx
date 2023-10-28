import achievementImg from "../images/achievement.webp";
import achievementImg1 from "../images/FooterQualifier.webp";
import achievementImg2 from "../images/FooterQualifier-BBB.webp";
import achievementImg3 from "../images/achievement1.webp";

const Achievements = () => {
	return (
		<section className="py-10 lg:py-0">
			<div className="lg:flex items-center">
				<div className="px-5 md:px-20 lg:px-0 lg:w-2/5">
					<h2 className="font-bold text-4xl text-center lg:w-3/5 mx-auto mb-5">
						Health Makes Everything Possible
					</h2>
					<h3 className="text-center">Our Impact with Your Giving Dollar</h3>
					<p className="lg:w-[80%] mx-auto text-center mb-5">
						Generous donors make all our achievements possible. We are able to respond to more
						disasters, expand our health programs and save more lives because of the individuals,
						foundations and corporations that trust Americares to improve the lives of people in the
						United States and around the world.
					</p>
					<div className="flex justify-center">
						<img src={achievementImg1} alt="" className="w-20 h-20" />
						<img src={achievementImg2} alt="" className="w-20 h-20" />
					</div>
				</div>
				<div className="my-10 lg:my-0 lg:w-3/5">
					<img src={achievementImg} alt="" />
				</div>
			</div>
			<div className="px-5 md:px-20 lg:px-0 text-center lg:grid lg:grid-cols-3 items-center lg:w-9/12 mx-auto">
				<div className="flex justify-center mb-5 lg:mb-0 lg:block">
					<img src={achievementImg3} alt="" />
				</div>
				<div className="mb-5 lg:mb-0 lg:-ml-10 lg:mr-5 ">
					<h3 className="font-bold text-3xl">
						More than 98% of our resources support health programs.
					</h3>
				</div>
				<div>
					<p>
						SoulsAid Global efficiency with your charitable dollar is one reason that we’re trusted
						by donors and consistently receive high marks from charity evaluators.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Achievements;
