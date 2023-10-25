import MainLayout from "../layouts/MainLayout";
import benefit1 from "../images/benefit1.webp";
import whyhealth1 from "../images/whyhealth1.webp";
import bgPattern from "../images/bg-pattern.webp";
import { Link } from "react-router-dom";

const WhyHealth = () => {
	return (
		<MainLayout>
			<section className="bg-achievement bg-no-repeat bg-fixed bg-cover bg-right-top min-h-screen">
				<div className="w-[45%] ml-8 min-h-screen my-auto flex flex-col justify-center text-white">
					<h1 className="text-7xl font-extrabold mb-5">
						Health is a <br />
						Human Right
					</h1>
					<p className="text-xl">
						We must create a world where every person – everywhere – has a fair and just opportunity
						to live their healthiest life.
					</p>
				</div>

				<div className="bg-white min-h-screen pt-32 pb-80 ">
					<div className="flex justify-between items-center w-[65%] mx-auto">
						<h2 className="text-6xl leading-tight font-extrabold w-1/2">
							The right to health is the heart of our mission and action at Americares.
						</h2>
						<p className="w-[50%] text-xl">
							It is in enshrined in the World Health Organization constitution of 1948, “The
							enjoyment of the highest attainable standard of health is one of the fundamental
							rights of every human being…”
							<br />
							<br />
							It is defined in the Universal Declaration of Human Rights at the founding of the
							United Nations in Article 25, “Everyone has the right to a standard of living adequate
							for the health and well-being of himself and of his family, including food, clothing,
							housing and medical care…”
						</p>
					</div>
				</div>
				<div className="bg-white">
					<img src={bgPattern} alt="" />
				</div>

				{/* ========================== HEALTH CARE ====================================== */}

				<div className="bg-[#272b32] text-white pt-40 pb-32 relative">
					<img className=" w-[30%] absolute -top-80 left-[35%]" src={whyhealth1} alt="" />
					<div>
						<h2 className="text-center text-6xl font-extrabold mb-16">
							Health care for all
							<br />
							benefits everyone.
						</h2>
						<div className="flex  w-[65%] mx-auto">
							<div className="w-1/2 mr-20">
								<p className="text-xl">
									No person should go without access to quality, affordable health care.
									<br />
									<br />
									Everyone benefits when we all have access to the quality care we need to reach our
									full potential. But too often – and for too many – this is out of reach.
									<br />
									<br />
									The determinants of a person’s health often stem from issues beyond any one
									person’s control. Disparities in quality of care and/or health outcomes are
									unacceptable – especially when these gaps result from inequities in our health
									system and the conditions in which people are born, live, work and age.
									<br />
									<br />
									Where a person lives should not dictate the possibility of good health.
								</p>
							</div>
							<div className="w-[50%]">
								<img src={benefit1} alt="" />
							</div>
						</div>
					</div>
				</div>

				{/* ============================================================== */}
				<div className="bg-healthhuman min-h-screen py-32">
					<div className="bg-white h-full w-3/5 mx-auto text-center py-20 px-32">
						<h2 className="text-center font-bold text-6xl w-[85%] mx-auto mb-10">
							With good health, families and communities thrive.
						</h2>
						<h3 className="font-semibold italic text-3xl mb-5">Health is essential.</h3>
						<p className="text-xl">
							With good health, people can attend school, be productive at work, care for their
							families and contribute to strong communities. Poor health puts all of that at risk.
							Health is fundamental to all aspects of development.
							<br />
							<br />
							We know access to consistent preventive care can reduce disability, debilitating
							medical conditions, the need for long-term care and health care costs. At the same
							time, universal access to vaccines, treatment and health education can reduce the
							spread of disease.
							<br />
							<br />A deadly global pandemic has taught us all that the time to reach health equity
							is now.
						</p>
					</div>
				</div>

				{/* ===================================================================== */}
				<div className="bg-[#fcb831] px-10 py-20">
					<div className="text-center mb-10">
						<h2 className="text-5xl font-extrabold mb-2">Take Action</h2>
						<p className="text-lg ">So many ways to give health. You can choose.</p>
					</div>
					<div className="flex justify-between items-center">
						<div className="mr-10">
							<div className="bg-takeaction1 bg-center bg-cover h-60"></div>
							<div className="bg-white px-10 pt-10 pb-5 h-80 ">
								<h3 className="text-3xl font-bold mb-3">Give Monthly</h3>
								<p className="text-lg">Become a partner in caring for people in crisis</p>
								<Link to="#" className="text-[#fcb831] font-bold text-3xl mt-12 block">
									Learn More
								</Link>
							</div>
						</div>
						<div className="mr-10">
							<div className="bg-takeaction1 bg-center bg-cover h-60"></div>
							<div className="bg-white px-10 pt-10 pb-5 h-80 ">
								<h3 className="text-3xl font-bold mb-3">Start Your Own Fundraiser</h3>
								<p className="text-lg">Create your own campaign on Facebook to Give Health</p>
								<Link to="#" className="text-[#fcb831] font-bold text-3xl mt-12 block">
									Explore Now
								</Link>
							</div>
						</div>

						<div className="mr-10">
							<div className="bg-takeaction1 bg-center bg-cover h-60"></div>
							<div className="bg-white px-10 pt-10 pb-5 h-80 ">
								<h3 className="text-3xl font-bold mb-3">Work With Us</h3>
								<p className="text-lg">Check our career and volunteer opportunities</p>
								<Link to="#" className="text-[#fcb831] font-bold text-3xl mt-12 block">
									Explore Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default WhyHealth;
