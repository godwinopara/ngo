import Achievements from "./components/Achievements";
import Catelog from "./components/Catelog";
import Footer from "./components/Footer";
import GetUpdate from "./components/GetUpdate";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partnership from "./components/Partnership";
import Services from "./components/Services";
import UrgentCrisis from "./components/UrgentCrisis";

function App() {
	return (
		<div className="App">
			<Header />
			<UrgentCrisis />
			<Hero />
			<Catelog />
			<Services />
			<Partnership />
			<GetUpdate />
			<Achievements />
			<Footer />
		</div>
	);
}

export default App;
