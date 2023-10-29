import Header from "../components/Header";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";
import { useEffect } from "react";

interface MainLayoutProps {
	children: JSX.Element;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	return (
		<div>
			<Header />
			{children}
			<Achievements />
			<Footer />
		</div>
	);
};

export default MainLayout;
