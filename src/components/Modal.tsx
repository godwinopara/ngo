import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { FaX } from "react-icons/fa6";
import { IoMailUnreadSharp } from "react-icons/io5";

interface ModalIProp {
	closeModal: any;
}

const Modal = ({ closeModal }: ModalIProp) => {
	return (
		<>
			{createPortal(
				<div className="bg-[#000000cc] fixed flex justify-center items-center top-0 w-full z-40 left-0 min-h-screen ">
					<div className="bg-[#f2f2f2] relative flex flex-col items-center justify-center h-[300px] mx-8 lg:w-[500px] px-5">
						<p className="text-2xl lg:text-3xl text-center font-semibold mb-8">
							We currently have 253 Job Openings
						</p>
						<Link to="/application">
							<button className=" bg-red-600 text-white font-bold text-md rounded-sm px-8 py-5">
								Apply Now
							</button>
						</Link>
						<div
							onClick={closeModal}
							className="absolute cursor-pointer -top-8 rounded-full -right-6 border border-black p-5 bg-black"
						>
							<FaX className=" text-2xl text-red-600" />
						</div>
						<div className="absolute -top-8 p-2 hover:animate-pulse transition-duration-2000 scale-150">
							<IoMailUnreadSharp className="text-7xl text-red-600 " />
						</div>
					</div>
				</div>,
				document.body
			)}
		</>
	);
};

export default Modal;
