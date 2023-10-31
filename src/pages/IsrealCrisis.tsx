import UrgentCrisis from "../components/UrgentCrisis";
import MainLayout from "../layouts/MainLayout";

const IsrealCrisis = () => {
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
									<span className="text-lg">Active Emergency</span>
								</div>
								<div className="lg:mr-8 border-b py-3 flex justify-between items-center lg:border-none">
									<strong className="mr-5 md:mr-2 text-xl">DATE</strong>
									<span className="text-lg">October 7, 2023</span>
								</div>
								<div className="lg:mr-8 border-b flex py-3 justify-between items-center lg:border-none">
									<strong className="mr-5 lg:mr-2 text-xl">REGION</strong>
									<span className="text-lg">Isreal/Gaza</span>
								</div>
							</div>
							<div className="hidden lg:block h-[2px] bg-white"></div>
							<h1 className="pl-6 pt-6 text-2xl md:text-3xl lg:mt-16 lg:text-6xl font-bold">
								Israel/Gaza Crisis
							</h1>
						</div>
					</div>

					<div className="px-8 lg:px-0 max-w-[800px] mx-auto text-lg my-20">
						<h1 className="text-4xl uppercase">The Situation</h1>
						<br />
						<p>
							On October 7, 2023, in the early morning hours, Israel was violently attacked across
							the border from Gaza. Since the attack, Israel has responded with ongoing
							counterstrikes. Thousands of deaths and injuries have been reported in Gaza and Israel
							as hostilities intensify, and the toll continues to rise with over a million people
							displaced in Gaza – about half the population. For the latest update on the situation,
							read the most recent report from the United Nations Office for the Coordination of
							Humanitarian Affairs (UNOCHA).
						</p>
						<br />
						<p>
							The escalation has created a major humanitarian crisis with health and other essential
							services including power and sanitation shutting down and food and water supplies
							nearly exhausted. The health care system in Gaza is on the brink of collapse with
							hospitals and health centers damaged and running out of fuel and supplies, severely
							limiting their capacity to treat the sick and injured.
						</p>
						<br />
						<p>
							We call on all parties to protect civilians. Hospitals should not be targeted,
							civilians should have access to safe spaces away from the fighting and the
							humanitarian corridor should be expanded to allow more food, medicine, and other
							essentials to enter Gaza.
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
						<br />
						<h2 className="text-4xl">OUR RESPONSE</h2>
						<br />
						<p>
							SoulsAidGlobal is devastated by the catastrophic loss of life and widespread injury
							caused by the violent and destructive war in Israel and Gaza. Our hearts go out to all
							those affected during this extremely difficult time. We stand in support of all people
							impacted by the war.
						</p>
						<br />
						<strong>How do we decide who to help?</strong>
						<br />
						<br />
						<p>
							We believe that health is a human right. SoulsAid Global follows humanitarian
							principles and gives priority to the most urgent cases irrespective of race,
							nationality, geography, gender, religious belief, political opinion or class. We
							always ensure the support we provide is neutral, impartial and the right match for the
							local needs
						</p>
						<br />
						<p>
							As the humanitarian crisis worsens, we are working with partner organizations with
							staff on the ground in Israel and Gaza to increase access to medicine, medical
							supplies, medical equipment and mental health support for frontline health care
							providers and survivors.
						</p>
					</div>
				</section>
			</>
		</MainLayout>
	);
};

export default IsrealCrisis;
