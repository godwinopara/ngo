import UrgentCrisis from "../components/UrgentCrisis";
import MainLayout from "../layouts/MainLayout";

const WhereWeWork = () => {
	return (
		<MainLayout>
			<>
				<UrgentCrisis />
				<section>
					<div className="relative">
						<div className="min-h-[70vh] bg-workHero bg-center bg-cover text-center flex items-center text-white">
							<div className="z-20 px-5 lg:px-0">
								<h1 className="text-5xl lg:text-6xl mb-5 font-bold">Where We Work</h1>
								<p className="text-xl lg:w-1/2 mx-auto">
									By supporting over 4,000 health centers worldwide with transformative health
									projects and donations of medicine, Americares improves the health of millions of
									people affected by poverty, disaster and inequity every year.
								</p>
							</div>
						</div>
						<div className="bg-black absolute top-0 left-0 h-full w-full opacity-60"></div>
					</div>
					<div className="py-20 bg-gray-100">
						<p className="mx-5 lg:w-3/5 lg:mx-20 text-2xl">
							We are one of the leading global nonprofit providers of donated medicine and medical
							supplies, distributing over $1 billion in medicine and supplies to an average of 85
							countries each year. Working with partners, Americares carries out health programs in
							30 countries, including Colombia, El Salvador, Haiti, India, Liberia, the Philippines,
							Tanzania and the United States, including Puerto Rico.
						</p>
					</div>

					<div className="text-center py-20 px-5 lg:px-0">
						<h2 className="text-5xl font-bold mb-5">Our Global Strategy</h2>
						<p className="lg:w-1/2 mx-auto text-xl">
							HumanityFirst supports local health centers, helping providers meet the needs of their
							patients and communities—in times of disaster and every day.
						</p>
					</div>
				</section>
			</>
		</MainLayout>
	);
};

export default WhereWeWork;
