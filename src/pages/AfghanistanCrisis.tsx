import UrgentCrisis from "../components/UrgentCrisis";
import MainLayout from "../layouts/MainLayout";

const AfghanistanCrisis = () => {
	return (
		<MainLayout>
			<>
				<UrgentCrisis />
				<section>
					<div className="bg-[#940520] min-h-[200px] py-8 md:py-16 text-white">
						<div className="max-w-[1200px] mx-auto">
							<div className="px-4 pb-5 md:px-8 xl:px-0 lg:flex lg:items-center lg:pb-0">
								<div className=" border-b pb-3 flex justify-between items-center lg:pb-0 lg:mr-8  lg:border-none">
									<strong className="lg:mr-2 text-xl">STATUS</strong>
									<span className="text-lg">Crisis Alert</span>
								</div>
								<div className="lg:mr-8 border-b flex py-3 justify-between items-center lg:border-none">
									<strong className="mr-5 lg:mr-2 text-xl">DATE</strong>
									<span className="text-lg">October 7, 2023</span>
								</div>
								<div className="lg:mr-8 border-b flex py-3 justify-between items-center lg:border-none">
									<strong className="mr-5 lg:mr-2 text-xl">REGION</strong>
									<span className="text-lg">Afghanistan</span>
								</div>
							</div>
							<div className="hidden lg:block h-[2px] bg-white"></div>
							<h1 className="pl-6 pt-6 text-2xl md:text-3xl lg:mt-16 lg:text-6xl font-bold">
								Afghanistan Earthquake
							</h1>
						</div>
					</div>

					<div className="px-8 lg:px-0 max-w-[800px] mx-auto text-lg my-20">
						<p>
							Multiple major earthquakes struck Afghanistan’s Herat Province on Saturday, October 7
							and Wednesday, October 11, killing thousands of people and injuring thousands more.
							The death toll is expected to rise as strong aftershocks continue in the region,
							making rescue efforts even more difficult. According to the United Nations Office for
							the Coordination of Humanitarian Affairs, 100 percent of the homes in Herat Province’s
							Zindajan district, the epicenter of the earthquake, were destroyed. A third, major
							earthquake of a 6.3 magnitude struck western Afghanistan on Sunday, October 15.
						</p>
						<br />
						<p>
							Our Emergency Response Team immediately reached out to local partner organizations
							working in the region to offer assistance, including emergency funding to purchase
							critically needed aid to support survivors. We are also prepared to send urgently
							needed medicines and relief supplies to supply health workers treating survivors.
						</p>
						<br />
						<p>
							“These back-to-back earthquakes have dealt a massive blow to a region where many
							families were already struggling to cope with a lack of basic necessities, including
							access to health services” said SoulsAid Global Director of Complex Emergencies Adam
							Keehn. “Our No. 1 priority is meeting the most urgent health needs of survivors.”
						</p>
						<br />
						<p>
							SoulsAidGlobal has a long history of responding to earthquakes all over the world,
							including the 2023 Türkiye and Syria earthquake, the 2022 earthquake in Afghanistan,
							the 2015 Nepal earthquake, the 2010 and 2021 earthquakes in Haiti and the 2004 Indian
							Ocean earthquake and tsunami. SoulsAid Global has also been providing assistance to
							Afghanistan since 1986, delivering medicine, medical supplies and relief items in
							response to emergencies and ongoing needs.
						</p>
					</div>
				</section>
			</>
		</MainLayout>
	);
};

export default AfghanistanCrisis;
