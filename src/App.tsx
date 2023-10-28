import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import WhyHealth from "./pages/WhyHealth";
import WhatWeDo from "./pages/WhatWeDo";
import WhereWeWork from "./pages/WhereWeWork";
import Career from "./pages/Career";
import CrisisAlert from "./pages/CrisisAlert";
import JobDetails from "./pages/JobDetails";
import Application from "./pages/Application";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/why-health",
		element: <WhyHealth />,
	},
	{
		path: "/what-we-do",
		element: <WhatWeDo />,
	},
	{
		path: "/where-we-work",
		element: <WhereWeWork />,
	},
	{
		path: "/careers",
		element: <Career />,
	},
	{
		path: "/crisis-alert",
		element: <CrisisAlert />,
	},
	{
		path: "careers/:jobId",
		element: <JobDetails />,
	},
	{
		path: "/application",
		element: <Application />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
