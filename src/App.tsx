import Catelog from "./components/Catelog";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UrgentCrisis from "./components/UrgentCrisis";

function App() {
	return (
		<div className="App">
			<Header />
			<UrgentCrisis />
			<Hero />
			<Catelog />
		</div>
	);
}

export default App;
