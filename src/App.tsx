import Catelog from "./components/Catelog";
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
		</div>
	);
}

export default App;
