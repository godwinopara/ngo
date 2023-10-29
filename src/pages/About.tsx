import aboutBg2 from "../images/aboutbg-2.jpg";
import aboutBg3 from "../images/aboutbg-3.jpg";
import MainLayout from "../layouts/MainLayout";

const About = () => {
	return (
		<MainLayout>
			<section>
				<div className="min-h-[400px] bg-aboutbg bg-cover bg-center flex justify-center items-center text-white">
					<h1 className="text-5xl font-bold">ABOUT US</h1>
				</div>

				<div className="max-w-[1000px] mx-auto grid grid-cols-2 gap-28 my-20">
					<div>
						<div className="h-[1px] w-[60%] bg-red-600"></div>
						<h2 className="text-3xl font-bold my-5 text-red-600">ABOUT US</h2>
						<p className="text-gray-600">
							Soulsaid Global is a non-political, non-religious and impartial international relief
							and development agency that focuses on protecting human life and dignity. SoulsAid
							Global provides aid on the basis of necessity alone, irrespective of caste, creed,
							color or religion. Our mission is to serve socially disadvantaged individuals and
							families in the poorer communities and disaster struck areas of the world.
						</p>
						<br />
						<p className="text-gray-600">
							We aim to offer sustainable development solutions to society whilst providing and
							empowering local communities the resources to help themselves. We promote peace and
							understanding based on mutual respect and acceptance. Through advocacy, emergency
							responses and efficient programming, HF prioritizes the health and safety of those
							most vulnerable.
						</p>
					</div>
					<div>
						<p className="text-gray-600">
							Established in 1995, SoulsAid Global (‘SAG’) was registered with the UK Charities
							Commission and has expanded its operations in 62 countries, across 6 continents. As a
							relief organization, HF aims to help millions of people in need in alleviating
							poverty, improving standards of living, refining health resources and promoting
							quality education to vulnerable communities. SoulsAid Global became the ultimate
							parent company, its offices are based in London and it is governed by a board of
							trustees. HF is funded by voluntary contributions of individuals and private sponsors.
							Majority of the aid workers and management are unpaid volunteers who recognize the
							significance and value in helping those less fortunate.
						</p>
						<br />
						<p className="text-gray-600">
							SoulsAid Global has consultative status with United Nations Economic and Social
							Council (ECOSOC). HF also works in partnership with many international, regional and
							local relief organizations.
						</p>
					</div>
				</div>

				<div className="my-20">
					<img src={aboutBg2} alt="child" />
				</div>

				{/* =========== OUR HISTORY =============== */}
				<div className="max-w-[1000px] mx-auto ">
					<h2 className="text-3xl font-bold my-5 text-red-600">OUR HISTORY</h2>
					<div className=" grid grid-cols-2 gap-28 mt-10 mb-20">
						<div>
							<p>
								SoulsAid Global began to operate in the early 1990 and was formally established
								under a trust deed as a registered charity with the UK Charities Commission, in
								November1995. Now registered in 62 countries, across 6 continents, HF provides aid
								and resources to millions of people in need. Our initial mission was to focus on
								disaster response programs across Europe, but soon morphed in alleviating poverty,
								improving standards of living, refining health resources and services and promoting
								quality education to vulnerable communities.
							</p>
						</div>
						<div>
							<p>
								In 2019, a separate new entity SoulsAid Global UK was setup to focus on development
								projects in locally and developing countries under the guidance of SoulsAid Global
								International both incorporated as limited companies by guarantee with the UK
								Charity Commission.
							</p>
						</div>
					</div>
				</div>

				{/* ============ colaboration ============= */}
				<div className="mb-20">
					<img src={aboutBg3} alt="" />
				</div>

				<div className="max-w-[1000px] mx-auto ">
					<h2 className="text-3xl font-bold my-5 text-red-600">COLLABORATION</h2>
					<div className=" grid grid-cols-2 gap-28 mt-10 mb-20">
						<div>
							<p>
								The regional SoulsAid Global teams aim to deliver outcomes to help low income and
								vulnerable communities free themselves from poverty. Collaboration is important to
								SoulsAid Global as certain organizations expertise in certain areas. It is important
								to recognize that collaboration means richer resources to help communities in the
								areas most detrimental to them. Relief involves ambiguity, teamwork and strength in
								numbers; ensuring that communities get the best help accessible.
							</p>
						</div>
						<div>
							<p>
								Collaboration can include co-working, sharing of funds, resources and personnel. We
								achieved UN ECOSOC consultative status and work with a wide range of UN bodies. We
								partner with local organizations wherever it is possible to ensure that our response
								is quick and locally driven. It is important for us to collaborate with other
								organizations to gain trust.
							</p>
						</div>
					</div>
				</div>

				<div className="max-w-[1000px] mx-auto mb-20">
					<div className="mb-20">
						<h2 className="text-3xl font-bold my-5 text-red-600">TEAM MEMBERS</h2>
						<p>
							Our team members, from the board of directors, project managers, operations and
							production teams, marketing and finance all from a proficient and diverse background
							spanning years of professionalism, provide high levels of technical, functional and
							interpersonal skills. Our team members work with great devotion, commitment and
							passion to serve humanity.
						</p>
					</div>
					<div className="mb-20">
						<h2 className="text-3xl font-bold my-5 text-red-600">GOVERNANCE</h2>
						<p>
							SoulsAid Global is responsible for providing policies, general guidance, strategy and
							a complete framework of operations to all its affiliates across the globe. It is
							responsible for new setups and coordinates relief activities during major disasters.
							HF ensures effectiveness, efficiency and control in operational financial management.
							SoulsAid Global has two governing bodies:
						</p>
					</div>

					<div className="grid grid-cols-2 gap-16 items-center mb-20">
						<div>
							<h2 className="text-3xl font-bold my-5 text-red-600">
								BOARD OF <br />
								TRUSTEES
							</h2>
							<p>
								This is the governing body of HF International. It oversees all activities planned,
								conducted and executed by all its affiliates. The board formulates and approves
								policies, strategy and financial requirements of the organization. The trustees
								represent Africa, Asia, Europe and the Americas and collaborate collectively with
								their vast experience in these continents in humanitarian and relief initiatives
							</p>
						</div>
						<div>
							<h2 className="text-3xl font-bold my-5 text-red-600">
								MANAGEMENT <br /> BOARD
							</h2>
							<p>
								The day to day management is handled by an executive body responsible for
								implementing and supervising the global strategy and objectives defined by the board
								of trustees. The management board also ensures the effective management of the
								organisation and its activities. It monitors and coordinates the activities of all
								HF branches to ensure they are in keeping with the founding principles, objects and
								values.
							</p>
						</div>
					</div>

					<div>
						<div className="text-center">
							<h2 className="text-3xl font-bold my-5 text-red-600">THE MANAGEMENT</h2>
							<p>
								The management of SoulsAid Global is mainly operated by Health Care professionals,
								Entrepreneurs, Educators, technology expertise and many other professionals, all of
								whom volunteer their time to serve humanity.
							</p>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default About;
