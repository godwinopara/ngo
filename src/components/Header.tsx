import Logo from "../images/logomain.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
	const [showNav, setShowNav] = useState(false);

	const toggleNav = () => {
		setShowNav(!showNav);
	};

	return (
		<header className="sticky top-0 bg-white z-40">
			<nav className="px-5 lg:p-0 flex justify-between items-center max-w-[1400px] mx-auto ">
				<div className="w-1/2 lg:w-[20%] py-3">
					<Link to="/">
						<img src={Logo} alt="" className="w-[50%]" />
					</Link>
				</div>

				<ul className="hidden lg:flex justify-between items-center">
					<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/about">About Us</Link>
					</li>
					<li className="p-5 text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/why-health">Why Health</Link>
					</li>
					<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/what-we-do">What We Do</Link>
					</li>
					<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/where-we-work">Where We Work</Link>
					</li>
					<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/careers">Careers</Link>
					</li>
					<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/crisis-alert">Crisis Alert</Link>
					</li>
					<Link to="/application">
						<button className=" bg-slate-900 text-white font-bold text-md rounded-sm px-8 py-5">
							Apply Now
						</button>
					</Link>
				</ul>

				{showNav && (
					<ul className="absolute left-0 top-20 pl-5 pb-10 w-full bg-white lg:hidden">
						<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/about">About Us</Link>
						</li>
						<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/why-health">Why Health</Link>
						</li>
						<li className="p-5 text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/what-we-do">What We Do</Link>
						</li>
						<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/where-we-work">Where We Work</Link>
						</li>
						<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/careers">Careers</Link>
						</li>
						<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/crisis-alert">Crisis Alert</Link>
						</li>
						<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/contact">Contact Us</Link>
						</li>
						<Link to="/application">
							<button className=" bg-slate-900 text-white font-bold text-md rounded-sm px-8 py-5">
								Apply Now
							</button>
						</Link>
					</ul>
				)}

				<div className="lg:hidden cursor-pointer" onClick={toggleNav}>
					<FaBars className="text-2xl" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
