import { Link, useParams } from "react-router-dom";
import { jobData } from "../data/data";

const JobDetails = () => {
	const { jobId } = useParams();

	return (
		<>
			<section>
				<div className="px-5 lg:px-20 bg-[#5E6D80] text-white">
					<div>
						<div className="py-10">
							<h1 className="text-3xl lg:text-4xl ">{jobData[jobId].position}</h1>
							<p className="mt-5 lg:mt-0 text-xl">{jobData[jobId].location}</p>
							<Link to="/application">
								<button className="bg-[#0562af] text-white  py-3 cursor-pointer px-10 mt-6 text-xl">
									Apply Now
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="px-5 lg:px-20 mt-10">
					<div className="lg:w-[50%]">
						<div className="flex justify-between items-center mb-1">
							<div className="font-bold w-full"> Position Title:</div>
							<div className="w-full">{jobData[jobId].position}</div>
						</div>

						<div className="flex justify-between items-center mb-1">
							<div className="w-full font-bold">Location:</div>
							<div className="w-full">Remote</div>
						</div>
						<div className="flex justify-between items-center mb-1">
							<div className="w-full font-bold">Assignment Type:</div>
							<div className="flex justify-start w-full">Full time</div>
						</div>
					</div>
				</div>

				<div className="px-5 lg:px-20 mt-10">
					<h2 className="font-bold text-xl mb-4">About SoulsAid Global:</h2>
					<p className="lg:w-4/5 text-lg">
						SoulsAid Global is a health-focused relief and development organization that saves lives
						and improves health for people affected by poverty or disaster. Each year, SoulsAid
						Global reaches 85 countries on average, including the United States, with life-changing
						health programs, medicine, medical supplies, and emergency aid. SoulsAid Global is one
						of the world’s leading nonprofit providers of donated medicine and medical supplies. For
						more information, visit americares.org.
					</p>
				</div>

				<div className="px-5 lg:pl-20 lg:pr-40  mt-10">
					<h2 className="font-bold text-xl mb-4">Duties and Responsiblities</h2>
					<ul>
						{jobData[jobId].duties.map((duty) => {
							return <li className="list-disc ml-10">{duty}</li>;
						})}
					</ul>
				</div>

				<div className="px-5 lg:pl-20 lg:pr-40 my-10">
					<h2 className="font-bold text-xl mb-4">Required Experience</h2>
					<ul>
						{jobData[jobId].requirements.map((experience) => {
							return <li className="list-disc ml-10">{experience}</li>;
						})}
					</ul>
				</div>

				<div className="mb-20">
					<p className="italic w-4/5 mx-auto">
						SoulsAid Globalis an equal opportunity employer. We do not discriminate on the basis of
						race, religion, color, sex, sexual orientation, gender expression, pregnancy or
						pregnancy-related condition, age, national origin, ancestry, physical or mental
						disability, genetic information, marital status, veteran status, or any other
						characteristic protected by law.
					</p>
				</div>
			</section>

			<div className="ml-20 mb-20">
				<Link to="/application">
					<button className="bg-[#0562af] text-white  py-3 cursor-pointer px-10 mt-6 text-xl">
						Apply Now
					</button>
				</Link>
			</div>
		</>
	);
};

export default JobDetails;
