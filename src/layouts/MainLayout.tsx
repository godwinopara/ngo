import Header from "../components/Header";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";

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
		</div>
	);
};

export default MainLayout;
