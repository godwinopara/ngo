const Footer = () => {
	return (
		<footer className="bg-[#272b32] text-white">
			<div className="grid grid-cols-2 items-start gap-16 py-16 max-w-7xl mx-auto">
				<div className="w-4/5">
					<div className="border-b border-white pb-8">
						<h2 className="mb-2">HumanityFirst</h2>
						<p className="mb-1">88 Hamilton Avenue, Stamford, CT 06902</p>
						<p className="mb-1">
							<strong>Inquiries:</strong> (203) 658-9500
						</p>
						<p>
							<strong>Donations:</strong> (800)905-1082
						</p>
						info@americares.org
					</div>
					<div className="pt-5">
						<p>
							HumanityFirst is approved by the Internal Revenue Service as a 501 (C) (3) tax-exempt
							organization, and all donations are tax deductible to the extent provided by law.
							<br />
							<br />
							HumanityFirst websites created, owned & operated by HumanityFirst Foundation Stamford
							CT.
							<br />
							<br />
							We use cookies to help improve your experience. You can learn more by reading our
							Privacy Policy. By continuing to use our Site you agree to the terms of our policy.
							View
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
						<ul className="border-b border-white pb-6">
							<li className="mb-1">Contact Us</li>
							<li className="mb-1">Our Offices and Locations</li>
							<li>Careers</li>
						</ul>
						<ul className="pt-5">
							<li className="mb-1">Twitter</li>
							<li className="mb-1">Linkedin</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-3 font-bold">ABOUT</h3>
						<ul className="border-b border-white pb-6">
							<li className="mb-1">Privacy Policy</li>
							<li className="mb-1">FAQ</li>
							<li>Annual Reports and Financials</li>
						</ul>
						<ul className="pt-5">
							<li className="mb-1">Facebook</li>
							<li className="mb-1">Instagram</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-3 font-bold">MEDIA</h3>
						<ul className="border-b border-white pb-8">
							<li>Contact Us</li>
							<li>Our Offices and Locations</li>
							<li>Careers</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
