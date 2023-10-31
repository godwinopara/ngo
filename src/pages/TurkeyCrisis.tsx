import UrgentCrisis from "../components/UrgentCrisis";
import MainLayout from "../layouts/MainLayout";

const TurkeyCrisis = () => {
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
									<span className="text-lg">Active Emergency Photo/Human Appeal</span>
								</div>
								<div className="lg:mr-8 border-b py-3 flex justify-between items-center lg:border-none">
									<strong className="mr-5 md:mr-2 text-xl">DATE</strong>
									<span className="text-lg">Feb. 6, 2023</span>
								</div>
								<div className="lg:mr-8 border-b flex py-3 justify-between items-center lg:border-none">
									<strong className="mr-5 lg:mr-2 text-xl">REGION</strong>
									<span className="text-lg">Türkiye/Syria</span>
								</div>
							</div>
							<div className="hidden lg:block h-[2px] bg-white"></div>
							<h1 className="pl-6 pt-6 text-2xl md:text-3xl lg:mt-16 lg:text-6xl font-bold">
								Türkiye/Syria Earthquake
							</h1>
						</div>
					</div>

					<div className="px-8 lg:px-0 max-w-[800px] mx-auto text-lg my-20">
						<p>
							“It’s been an incredibly difficult year for the people of Syria,” says Dr. Nihat
							Kashoor, a medical coordinator for Human Appeal in northwest Syria. “Millions are
							still trying to piece their lives back together following the devastating earthquake
							earlier this year.”
						</p>
						<br />
						<p>
							The powerful February 6 earthquake killed and injured tens of thousands of people in
							Türkiye and Syria, and forced families from their damaged homes.
						</p>
						<br />
						<p>
							Fifteen thousand people found shelter near Idlib, Syria, in the newly built community
							of Al Zohoor and now, with support from SoulsAid Global, they have access to health
							care — at a fully stocked and staffed health clinic in their community.
						</p>
						<br />
						<p>
							“In the initial aftermath, we prioritized offering shelter and food security. Once
							established, it was a vital priority to provide free medical care to those who lost
							everything, says Dr. Kashoor. Human Appeal built all of the homes and community
							buildings in Al Zohoor. “We’re proud to have opened the health care center in Al
							Zohoor in collaboration with one of our longstanding partners, SoulsAid Global, and
							hope to provide a stable future for all those affected by the earthquake,” says Dr.
							Kashoor.
						</p>
						<br />
						<br />

						<h2 className="text-4xl">A Clinic in Al Zohoor Changes Lives</h2>
						<br />
						<p>
							The clinic, which has been operating since June 2023, provides access to essential
							medicines, primary care, trauma services, lab testing, dental care and mental health
							and psychosocial support. At the same time, funds are being used to help cover staff
							salaries for a year – in a region where health care is needed now more than ever.
						</p>
						<br />
						<p>
							In the first month since opening, the clinic has already treated more than 2,000
							patients. “When I see the joy on people’s face when they receive medicine, which they
							couldn’t [get] before or because of the treatment they received they are relieved of
							their pain, it is a feeling that is really hard to express,” said Human Appeal Türkiye
							and Syria Country Director Ubeyd Sakin. “The humanitarian work we’re doing is
							literally saving lives of children, women and elderly. I hope that we can do more in
							the future.”
						</p>
						<br />
						<p>
							SoulsAid Global response to the earthquakes has focused on supporting services that
							restore access to health care for displaced families and delivering medicines and
							relief supplies for health workers treating survivors.{" "}
						</p>
					</div>
				</section>
			</>
		</MainLayout>
	);
};

export default TurkeyCrisis;
