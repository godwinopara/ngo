import { Link } from "react-router-dom";
import logo from "../images/logomain-white.svg";

const Footer = () => {
	return (
		<footer className="bg-[#272b32] text-white px-5 md:px-20 lg:px-0">
			<div className="grid lg:grid-cols-2 items-start gap-16 py-16 max-w-7xl mx-auto">
				<div className="lg:w-4/5">
					<div className="border-b border-white pb-8">
						<div className="w-[200px] inline-block mb-3">
							<img src={logo} alt="" className="w-full" />
						</div>
						<p className="mb-1">83 W Washington Pl New York, NY 10011</p>
						<p className="mb-1">
							<strong>Inquiries:</strong> +1(423)347-0835
						</p>
						<p>
							<strong>Donations:</strong> +1(423)347-0835
							<br />
							<strong>Email:</strong> contact@soulsaidglobal.com , info@soulsaidglobal.com
						</p>
					</div>
					<div className="pt-5">
						<p>
							SoulsAid Global is approved by the Internal Revenue Service as a 501 (C) (3)
							tax-exempt organization, and all donations are tax deductible to the extent provided
							by law.
							<br />
							<br />
							SoulsAid Global websites created, owned & operated by SoulsAid Global Foundation
							Stamford CT.
							<strong> Privacy Policy, </strong>
							<strong>Terms and Condition </strong> and
							<strong> View legal disclosures</strong>
						</p>
					</div>
					<br />
					<p>
						© 2023 SoulsAid Global. All Rights Reserved. Health Is On The Way is a trademark of
						Tandigm Health, LLC.
					</p>
				</div>
				<div className="grid grid-cols-3 gap-8 lg:mt-10">
					<div className="">
						<ul>
							<li className="text-md mb-2 font-semibold list-none cursor-pointer hover:text-red-600 hover:underline">
								<Link to="/why-health">Why Health</Link>
							</li>
							<li className="text-md mb-2 font-semibol list-none cursor-pointer hover:text-red-600 hover:underline">
								<Link to="/what-we-do">What We Do</Link>
							</li>
							<li className="text-md mb-2 font-semibold list-none cursor-pointer hover:text-red-600 hover:underline">
								<Link to="/where-we-work">Where We Work</Link>
							</li>
						</ul>
					</div>
					<div className="">
						<ul>
							<li className="text-md mb-2 font-semibold cursor-pointer hover:text-red-600 hover:underline">
								<Link to="/crisis-alert">Crisis Alert</Link>
							</li>
							<li className="text-md mb-2 font-semibold cursor-pointer hover:text-red-600 hover:underline">
								<Link to="/careers">Careers</Link>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li className="mb-2  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
								<Link to="/about">About Us</Link>
							</li>
							<li className="mb-2 text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
								<Link to="/contact-us">Contact Us</Link>
							</li>
							<li className=" mb-2 text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
								<Link to="/privacy">Privacy Policy</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
