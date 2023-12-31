import MainLayout from "../layouts/MainLayout";
// import arrow from "../images/arrow.svg";
import { VscArrowRight } from "react-icons/vsc";

const CrisisAlert = () => {
	return (
		<MainLayout>
			<section className="mt-16 px-5 lg:px-0">
				<div className="max-w-6xl mx-auto">
					<div className="border-b border-black pb-5">
						<h1 className="text-5xl font-bold mb-3">Crisis Alert</h1>
						<p className="text-xl">
							We respond to an average of 30 natural disasters and humanitarian crises worldwide
							each year, establish long-term recovery projects and bring disaster preparedness
							programs to vulnerable communities. Every day, SoulsAid Global is ready.
						</p>
					</div>
					<div>
						<div className="lg:flex items-center justify-between py-5 border-b border-black">
							<div>
								<h2 className="font-bold text-3xl mb-5 lg:mb-0">Isreal/Gaza Crisis</h2>
							</div>
							<div className="flex justify-between lg:w-1/2">
								<dl className="w-full">
									<dt className="font-bold text-lg">Date</dt>
									<dd className="text-lg">October 7, 2023</dd>
								</dl>
								<dl className="w-full flex flex-col justify-start">
									<dt className="font-bold text-lg">Location</dt>
									<dd className="text-lg">Isreal,Gaza</dd>
								</dl>
								<button className="font-bold text-3xl">
									<VscArrowRight />
								</button>
							</div>
						</div>
						<div className="lg:flex items-center justify-between py-5 border-b border-black">
							<div>
								<h2 className="font-bold text-3xl mb-5 lg:mb-0">Afghanistan Earthquake</h2>
							</div>
							<div className="flex justify-betweenlg:w-1/2">
								<dl className="w-full">
									<dt className="font-bold text-lg">Date</dt>
									<dd className="text-lg">October 7, 2023</dd>
								</dl>
								<dl className="w-full flex flex-col justify-start">
									<dt className="font-bold text-lg">Location</dt>
									<dd className="text-lg">Afghanistan</dd>
								</dl>
								<button className="font-bold text-3xl">
									<VscArrowRight />
								</button>
							</div>
						</div>
						<div className="lg:flex items-center justify-between py-5 border-b border-black">
							<div>
								<h2 className="font-bold text-3xl mb-5 lg:mb-0">Libya Floods</h2>
							</div>
							<div className="flex justify-between lg:w-1/2">
								<dl className="w-full">
									<dt className="font-bold text-lg">Date</dt>
									<dd className="text-lg">September 10, 2023</dd>
								</dl>
								<dl className="w-full flex flex-col justify-start">
									<dt className="font-bold text-lg">Location</dt>
									<dd className="text-lg">Libya</dd>
								</dl>
								<button className="font-bold text-3xl">
									<VscArrowRight />
								</button>
							</div>
						</div>
						<div className="lg:flex items-center justify-between py-5 border-b border-black">
							<div>
								<h2 className="font-bold text-3xl mb-5 lg:mb-0">Hurricane Idalia</h2>
							</div>
							<div className="flex justify-between lg:w-1/2">
								<dl className="w-full">
									<dt className="font-bold text-md">Date</dt>
									<dd className="text-lg">August 30, 2023</dd>
								</dl>
								<dl className="border w-full flex flex-col justify-start">
									<dt className="font-bold text-lg">Location</dt>
									<dd className="text-lg">Florida</dd>
								</dl>
								<button className="font-bold text-3xl">
									<VscArrowRight />
								</button>
							</div>
						</div>
						<div className="lg:flex items-center justify-between py-5 border-b border-black">
							<div>
								<h2 className="font-bold text-3xl mb-5 lg:mb-0">Hawaii Wildfires</h2>
							</div>
							<div className="flex items-center justify-between lg:w-1/2">
								<dl className="w-full">
									<dt className="font-bold text-md">Date</dt>
									<dd className="text-lg">August 10, 2023</dd>
								</dl>
								<dl className="w-full flex flex-col justify-start">
									<dt className="font-bold ">Location</dt>
									<dd className="text-lg">Hawaii, United States</dd>
								</dl>
								<button className="font-bold text-3xl">
									<VscArrowRight />
								</button>
							</div>
						</div>
						<div className="lg:flex items-center justify-between py-5 border-b border-black">
							<div>
								<h2 className="font-bold text-3xl mb-5 lg:mb-0">Philippines Typhoon Doksuri</h2>
							</div>
							<div className="flex justify-between lg:w-1/2">
								<dl className="w-full">
									<dt className="font-bold text-lg">Date</dt>
									<dd className="text-lg">July 26, 2023</dd>
								</dl>
								<dl className="w-full flex flex-col justify-start">
									<dt className="font-bold text-lg">Location</dt>
									<dd className="text-lg">Philippines</dd>
								</dl>
								<button className="font-bold text-3xl">
									<VscArrowRight />
								</button>
							</div>
						</div>
						<div className="lg:flex items-center justify-between py-5 border-b border-black">
							<div>
								<h2 className="font-bold text-3xl mb-5 lg:mb-0">
									Deadly Earthquakes in Turkey & Syria
								</h2>
							</div>
							<div className="flex justify-between lg:w-1/2">
								<dl className="w-full">
									<dt className="font-bold text-lg">Date</dt>
									<dd className="text-lg">February 6, 2023</dd>
								</dl>
								<dl className="w-full flex flex-col justify-start">
									<dt className="font-bold text-lg">Location</dt>
									<dd className="text-lg">Turkey and Syria</dd>
								</dl>
								<button className="font-bold text-3xl">
									<VscArrowRight />
								</button>
							</div>
						</div>
						<div className="lg:flex items-center justify-between py-5 border-b border-black">
							<div>
								<h2 className="font-bold text-3xl mb-5 lg:mb-0">Pakistan Monsoon Floods</h2>
							</div>
							<div className="flex justify-between lg:w-1/2">
								<dl className="w-full">
									<dt className="font-bold text-lg">Date</dt>
									<dd className="text-lg">August 23, 2023</dd>
								</dl>
								<dl className="w-full flex flex-col justify-start">
									<dt className="font-bold text-lg">Location</dt>
									<dd className="text-lg">Pakistan</dd>
								</dl>
								<button className="font-bold text-3xl">
									<VscArrowRight />
								</button>
							</div>
						</div>
						<div className="lg:flex items-center justify-between py-5 border-b border-black">
							<div>
								<h2 className="font-bold text-3xl mb-5 lg:mb-0">War in Ukraine</h2>
							</div>
							<div className="flex justify-between lg:w-1/2">
								<dl className="w-full">
									<dt className="font-bold text-lg">Date</dt>
									<dd className="text-lg">February, 2023</dd>
								</dl>
								<dl className="w-full flex flex-col justify-start">
									<dt className="font-bold text-lg">Location</dt>
									<dd className="text-lg">Ukraine</dd>
								</dl>
								<button className="font-bold text-3xl">
									<VscArrowRight />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default CrisisAlert;
