import { Link } from "react-router-dom";
import image from "../images/404.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
	return (
		<div>
			<Header />
			<div className="flex flex-col justify-center items-center min-h-screen">
				<img src={image} alt="404" />
				<Link to="/" className="text-white font-bold text-xl bg-red-600 py-4 px-10">
					Back Home
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
