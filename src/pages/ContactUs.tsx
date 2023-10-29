import MainLayout from "../layouts/MainLayout";
import map from "../images/map.jpg";

const ContactUs = () => {
	return (
		<MainLayout>
			<section>
				<div>
					<div className="min-h-[400px] bg-contactBg bg-cover bg-center flex justify-center items-center text-white">
						<h1 className="text-5xl font-bold">CONTACT US</h1>
					</div>
					<div className="max-w-[900px] mx-auto flex items-center justify-center my-32">
						<div className="mr-20">
							<div className="">
								<div className="h-[1px] w-[50%] bg-red-600"></div>
								<h2 className="text-3xl font-bold my-5 text-red-600">SoulsAid Global</h2>
							</div>

							<div className="text-xl">
								<p className="mb-1">83 W Washington Pl New York, NY 10011</p>
								<p className="mb-2 font-semibold">Tel: +14233470835</p>
								<p className="text-red-600">info@soulsaidglobal.org</p>
								<p className="text-red-600">contact@soulsaidglobal.org</p>
							</div>
						</div>
						<div className="border p-5 border-black">
							<img src={map} alt="map" />
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default ContactUs;
