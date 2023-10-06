import Logo from "../images/ngologo.svg";

const Header = () => {
	return (
		<header className="sticky top-0 bg-white z-40">
			<nav className="flex justify-between items-center max-w-[1400px] mx-auto ">
				<div className="">
					<img src={Logo} alt="" className="w-52" />
				</div>

				<ul className="flex justify-between items-center">
					<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer">Why Health</li>
					<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer">What We Do</li>
					<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer">
						Where We Work
					</li>
					<li className="p-5 border-r-[1.6px] text-md font-semibold cursor-pointer">Take Action</li>
					<li className="p-5  text-md font-semibold cursor-pointer">Crisis Alert</li>
					<button className=" bg-slate-900 text-white font-bold text-md rounded-sm px-8 py-5">
						Donate Now
					</button>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
