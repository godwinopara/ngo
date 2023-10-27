import { Link } from "react-router-dom";
import logo from "../images/ngologo.svg";

const Footer = () => {
	return (
		<footer className="bg-[#272b32] text-white px-5 lg:px-0">
			<div className="grid lg:grid-cols-2 items-start gap-16 py-16 max-w-7xl mx-auto">
				<div className="lg:w-4/5">
					<div className="border-b border-white pb-8">
						<div className="bg-white inline-block p-3 mb-3">
							<img src={logo} alt="" />
						</div>
						<p className="mb-1">88 Hamilton Avenue, Stamford, CT 06902</p>
						<p className="mb-1">
							<strong>Inquiries:</strong> (203) 658-9500
						</p>
						<p>
							<strong>Donations:</strong> (800)905-1082
						</p>
					</div>
					<div className="pt-5">
						<p>
							HumanityFirst is approved by the Internal Revenue Service as a 501 (C) (3) tax-exempt
							organization, and all donations are tax deductible to the extent provided by law.
							<br />
							<br />
							HumanityFirst websites created, owned & operated by HumanityFirst Foundation Stamford
							CT.
							<strong> Privacy Policy, </strong>
							<strong>Terms and Condition </strong> and
							<strong> View legal disclosures</strong>
						</p>
					</div>
					<br />
					<p>
						© 2023 HumanityFirst. All Rights Reserved. Health Is On The Way is a trademark of
						Tandigm Health, LLC.
					</p>
				</div>
				<div className="flex gap-8">
					<div>
						<h3 className="mb-3 font-bold">CONTACT</h3>
						<ul className="pb-6">
							<li className="mb-1">
								<Link to="/contact">Contact Us</Link>
							</li>
							<li>
								<Link to="/career">Careers</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-3 font-bold">ABOUT</h3>
						<ul className=" pb-6">
							<li className="mb-1">
								<Link to="/privacy">Privacy Policy</Link>
							</li>
							<li className="mb-1">
								<Link to="/about">About Us</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
