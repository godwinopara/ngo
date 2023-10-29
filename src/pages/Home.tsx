import Achievements from "../components/Achievements";
import Catelog from "../components/Catelog";
import Footer from "../components/Footer";
import GetUpdate from "../components/GetUpdate";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partnership from "../components/Partnership";
import Services from "../components/Services";
import UrgentCrisis from "../components/UrgentCrisis";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		document.body.style.overflow = "hidden";
		setShowModal(true);
		return () => {
			document.body.style.overflowY = "scroll";
		};
	}, []);

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			{showModal && <Modal closeModal={handleCloseModal} />}
			<Header />
			<UrgentCrisis />
			<Hero />
			<Catelog />
			<Services />
			<Partnership />
			<GetUpdate />
			<Achievements />
			<Footer />
		</>
	);
};

export default Home;
