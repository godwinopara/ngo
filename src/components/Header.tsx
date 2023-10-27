import Logo from "../images/ngologo.svg";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";

const Header = () => {
	const [showNav, setShowNav] = useState(false);

	const toggleNav = () => {
		setShowNav(!showNav);
	};

	return (
		<header className="sticky top-0 bg-white z-40">
			<nav className="p-5 lg:p-0 flex justify-between items-center max-w-[1400px] mx-auto ">
				<div className="">
					<Link to="/">
						<img src={Logo} alt="" className="w-52" />
					</Link>
				</div>

				<ul className="hidden lg:flex justify-between items-center">
					<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/why-health">Why Health</Link>
					</li>
					<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/what-we-do">What We Do</Link>
					</li>
					<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/where-we-work">Where We Work</Link>
					</li>
					<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/careers">Careers</Link>
					</li>
					<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
						<Link to="/crisis-alert">Crisis Alert</Link>
					</li>
					<button className=" bg-slate-900 text-white font-bold text-md rounded-sm px-8 py-5">
						Donate Now
					</button>
				</ul>

				{showNav && (
					<ul className="absolute left-0 top-20 pl-5 pb-10 w-full bg-white lg:hidden">
						<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/why-health">Why Health</Link>
						</li>
						<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/what-we-do">What We Do</Link>
						</li>
						<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/where-we-work">Where We Work</Link>
						</li>
						<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/careers">Careers</Link>
						</li>
						<li className="p-5  text-md font-semibold cursor-pointer hover:text-red-600 hover:underline">
							<Link to="/crisis-alert">Crisis Alert</Link>
						</li>
						<button className=" bg-slate-900 text-white font-bold text-md rounded-sm px-8 py-5">
							Donate Now
						</button>
					</ul>
				)}

				<div className="lg:hidden cursor-pointer" onClick={toggleNav}>
					<SlMenu className="w-full" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
