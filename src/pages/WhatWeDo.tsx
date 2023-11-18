import MainLayout from "../layouts/MainLayout";
import img1 from "../images/what-w-do-1.webp";
import img2 from "../images/what-w-do-2.webp";
import img3 from "../images/what-w-do-3.webp";
import img4 from "../images/emergency-program.jpg";
import img5 from "../images/medicine-security.jpg";
import img6 from "../images/health-service.jpg";
import UrgentCrisis from "../components/UrgentCrisis";

const WhatWeDo = () => {
	return (
		<MainLayout>
			<>
				<UrgentCrisis />
				<section className="lg:grid grid-cols-2 mb-10 pr-8 mt-10">
					<div className="flex">
						<div className="w-[55%]">
							<img src={img1} alt="" />
							<img src={img2} alt="" />
						</div>
						<div className="h-full flex w-[50%]">
							<img src={img3} alt="" />
						</div>
					</div>
					<div className="ml-10">
						<h1 className="mt-8 lg:mt-8 text-6xl lg:text-8xl font-bold mb-5">
							What <br />
							We Do
						</h1>
						<p className="text-xl">
							When people are in crisis, we make sure that health comes first. Our
							<strong className="text-red-600"> Emergency Programs </strong>
							help communities prepare for, respond to and recover from disasters. We support
							<strong className="text-red-600"> Medicine Security </strong> for millions of people
							around the world. Our
							<strong className="text-red-600"> Health Services </strong> deliver quality health
							care for people who have none. We create and support sustainable programs that
							strengthen local health centers.
						</p>
					</div>
				</section>

				<section className="bg-[#272b32] py-32">
					<div className="max-w-8xl mx-auto text-white px-10">
						<div className="lg:flex items-center mb-16">
							<div className="w-full">
								<img src={img4} alt="" />
							</div>
							<div className="lg:ml-10">
								<h2 className="text-4xl mb-2 py-8 font-bold">Emergency Program</h2>
								<p className="lg:w-4/5 text-xl">
									Natural disasters, poverty, disease, and civil war impact people around the world.
									In an emergency, Americares provides quality medical aid, disaster relief and
									recovery.
								</p>
							</div>
						</div>
						<div className="lg:flex items-center mb-16">
							<div className="lg:text-right lg:mr-10">
								<h2 className="text-4xl  py-8 font-bold">Medicine Security</h2>
								<p className="lg:w-4/5 lg:ml-auto text-xl">
									Nearly 2 billion people in the world cannot get the medicines they need to stay
									healthy.
								</p>
							</div>
							<div className="mt-10 lg:mt-0 lg:w-[70%]">
								<img src={img5} alt="" />
							</div>
						</div>
						<div className="lg:flex items-center mb-16">
							<div className="w-full">
								<img src={img6} alt="" />
							</div>
							<div className="lg:ml-10">
								<h2 className="text-4xl mb-2 py-8 font-bold">Health Service</h2>
								<p className="lg:w-4/5 text-xl">
									At Americares-run clinics and those of our partners, we deliver and support
									quality health services, preventing and treating illness while promoting good
									health for each patient.
								</p>
							</div>
						</div>
					</div>
				</section>
			</>
		</MainLayout>
	);
};

export default WhatWeDo;
