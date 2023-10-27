import Header from "../components/Header";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";
import ScrollToTop from "react-scroll-to-top";

interface MainLayoutProps {
	children: JSX.Element;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div>
			<Header />
			{children}
			<Achievements />
			<Footer />
			<ScrollToTop smooth />
		</div>
	);
};

export default MainLayout;
