import { Link } from "react-router-dom";
import UrgentCrisis from "../components/UrgentCrisis";
import MainLayout from "../layouts/MainLayout";
import { VscArrowRight } from "react-icons/vsc";

const Career = () => {
	return (
		<MainLayout>
			<div className="bg-[#F3F4F6]">
				<UrgentCrisis />
				<section className="min-h-[80vh] bg-career bg-center bg-cover relative flex items-center justify-center ">
					<div className="absolute h-full w-full bg-black opacity-70"></div>
					<div className="z-20 relative text-center text-white">
						<h1 className="font-bold text-7xl mb-5">Work With Us</h1>
						<p className="w-1/2 mx-auto text-xl">
							HumanityFirst seeks dedicated professionals who are passionate about global health and
							emergency response. Our employees and volunteers are committed to saving lives and
							building healthier futures for people in crisis in the U.S. and around the world.
							Check out the list of our open positions by clicking the red button below.
						</p>
						<button className="bg-red-800 py-5 px-10 mt-6 text-xl">View Openings Below</button>
					</div>
				</section>
				<section className="max-w-6xl mx-auto mt-10 ">
					<p className="text-xl">Thank you for your interest in HumanityFirst!</p>
					<p></p>

					<div>
						<h2 className="text-3xl my-5">Current Openings</h2>
						<div className="mb-16 py-10">
							<Link to="/careers/1">
								<div className="mb-5 bg-white p-5 flex items-center justify-between cursor-pointer">
									<div>
										<h3 className="font-bold text-2xl">
											Inventory Specialist, Patient Assistance Program
										</h3>
										<p className="text-lg">Norwalk, CT, United States</p>
									</div>
									<button className="font-bold text-3xl">
										<VscArrowRight />
									</button>
								</div>
							</Link>
							<Link to="/careers/2">
								<div className="mb-5 bg-white p-5 flex items-center justify-between cursor-pointer">
									<div>
										<h3 className="font-bold text-2xl">Nurse Practitioner, Adult</h3>
										<p className="text-lg">Norwalk, United States</p>
									</div>
									<button className="font-bold text-3xl">
										<VscArrowRight />
									</button>
								</div>
							</Link>
							<Link to="/careers/3">
								<div className="mb-5 bg-white p-5 flex items-center justify-between cursor-pointer">
									<div>
										<h3 className="font-bold text-2xl">Senior Associate</h3>
										<p className="text-lg">United States</p>
									</div>
									<button className="font-bold text-3xl">
										<VscArrowRight />
									</button>
								</div>
							</Link>
							<Link to="/careers/4">
								<div className="mb-5 bg-white p-5 flex items-center justify-between cursor-pointer">
									<div>
										<h3 className="font-bold text-2xl">Analyst, Financial Planning and Analysis</h3>
										<p className="text-lg">United States</p>
									</div>
									<button className="font-bold text-3xl">
										<VscArrowRight />
									</button>
								</div>
							</Link>
							<Link to="/careers/5">
								<div className="mb-5 bg-white p-5 flex items-center justify-between cursor-pointer">
									<div>
										<h3 className="font-bold text-2xl">Social Media Manager</h3>
										<p className="text-lg">Remote</p>
									</div>
									<button className="font-bold text-3xl">
										<VscArrowRight />
									</button>
								</div>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</MainLayout>
	);
};

export default Career;
