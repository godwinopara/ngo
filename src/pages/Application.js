import { useState } from "react";
import { storage, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import logo from "../images/newLogo.svg";
import Select from "react-select";
import Loading from "../components/Loading";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Application = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [country, setCountry] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [gender, setGender] = useState("");
	const [ethnicity, setEthnicity] = useState("");
	const [language, setLanguage] = useState("");
	const [vetran, setVetran] = useState("");
	const [degree, setDegree] = useState("");
	const [resume, setResume] = useState("");

	const [loading, setLoading] = useState(false);

	const genderSelectOptions = [
		{ value: "male", label: "Male" },
		{ value: "female", label: "Female" },
		{ value: "decline", label: "Decline or Self Identity" },
	];

	const raceSelectOption = [
		{ value: "white", label: "White / Caucasian" },
		{ value: "black", label: "Black / African American" },
		{ value: "asian", label: "Asian" },
		{ value: "latinX", label: "Latinx (Hispanic)" },
		{ value: "nativeAmerican", label: "Native American" },
		{ value: "pacificIslander", label: "Pacific Islander" },
		{ value: "otherRace", label: "Other Race" },
		{ value: "decline", label: "Decline or Self Identity" },
	];

	const vetranSelectOption = [
		{ value: "vetran", label: "I am a vetran" },
		{ value: "notVetran", label: "I'm not a veteran" },
		{ value: "decline", label: "Decline or Self Identity" },
	];

	const degreeSelectOption = [
		{ value: "associate", label: "Associate Degree" },
		{ value: "bachelor", label: "Bachelor's Degree" },
		{ value: "masters", label: "Master's Degree" },
		{ value: "Doctoral", label: "Doctor's Degree" },
	];

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files[0];

		const fileRef = ref(storage, `resumes/${file.name + v4()}`);
		uploadBytes(fileRef, file).then((resumeLink) => {
			console.log("resumeLink", resumeLink);
			getDownloadURL(resumeLink.ref).then((url) => {
				setResume(url);
			});
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const valRef = collection(db, "userData");
		await addDoc(valRef, {
			firstname: firstname,
			lastname: lastname,
			email: email,
			city: city,
			country: country,
			state: state,
			zipcode: zipcode,
			address: address,
			language: language,
			phoneNumber: phoneNumber,
			gender: gender,
			ethnicity: ethnicity,
			vetran: vetran,
			degree: degree,
			imgUrl: resume,
		});

		setLoading(false);
		toast.success("Application Submitted Successfully");

		setFirstname("");
		setLastname("");
		setEmail("");
		setAddress("");
		setCity("");
		setState("");
		setZipcode("");
		setPhoneNumber("");
		setLanguage("");
		setGender("");
		setEthnicity("");
		setVetran("");
		setDegree("");
		setResume("");
	};

	return (
		<section className="py-8 text-[#808080] max-w-[900px] mx-auto">
			<Link to="/">
				<img src={logo} alt="logo" className="w-[20%] mb-10" />
			</Link>

			<div>
				<h2 className="font-bold text-2xl mb-8">SUBMIT YOUR APPLICATION</h2>

				<form onSubmit={handleSubmit}>
					{/* Contact Details */}
					<div>
						<div className="lg:flex mb-5">
							<div className="w-full mb-5 lg:mb-0 lg:mr-10">
								<label className="block text-lg mb-1">First Name</label>
								<input
									type="text"
									placeholder="firstname"
									value={firstname}
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setFirstname(e.target.value)}
									required
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2">Last Name</label>
								<input
									type="text"
									placeholder="lastname"
									value={lastname}
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setLastname(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="lg:grid lg:grid-cols-2">
							<div>
								<label className="block mb-2">Email</label>
								<input
									type="text"
									placeholder="Email"
									value={email}
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
						</div>
					</div>

					{/* Upload Attachment */}
					<div>
						<div className="my-8">
							<label className="block mb-2 text-2xl">Upload Resume</label>
							<input type="file" onChange={handleFileUpload} required />
						</div>
					</div>

					{/* ================== Contact Details ======================= */}
					<div>
						<h2 className="text-3xl my-8 font-semibold">Contact Details</h2>
						<div className="lg:flex items-center">
							<div className="w-full lg:mr-5">
								<label className="block mb-2">Address</label>
								<input
									type="text"
									value={address}
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>
							<div className="w-full lg:mr-5">
								<label className="block mb-2">City</label>
								<input
									type="text"
									value={city}
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setCity(e.target.value)}
								/>
							</div>
						</div>
						<div className="lg:flex items-center">
							<div className="w-full lg:mr-5">
								<label className="block mb-2">Country</label>
								<input
									type="text"
									value={country}
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setCountry(e.target.value)}
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2">State</label>
								<input
									type="text"
									value={state}
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setState(e.target.value)}
								/>
							</div>
						</div>
						<div className="lg:flex items-center">
							<div className="w-full lg:mr-5">
								<label className="block mb-2">Phone</label>
								<input
									type="text"
									value={phoneNumber}
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2">Zip Code</label>
								<input
									type="text"
									value={zipcode}
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setZipcode(e.target.value)}
								/>
							</div>
						</div>
					</div>

					{/* =============== Education ================ */}
					<div>
						<h2 className="text-2xl font-semibold my-5">Highest Level of Education</h2>
						<div className="lg:flex items-center mb-5">
							<div className="w-full">
								<label htmlFor="" className="block mb-1">
									Degree
								</label>
								<Select
									defaultValue={degree}
									options={degreeSelectOption}
									onChange={(e) => setDegree(e.value)}
								/>
							</div>
						</div>
					</div>
					<div>
						<h2 className="mb-1">Language</h2>
						<div className="grid grid-cols-2">
							<input
								type="text"
								value={language}
								onChange={(e) => setLanguage(e.target.value)}
								className="border border-black w-full h-10 rounded px-2"
							/>
						</div>
					</div>
					<div>
						<h2 className="font-bold text-2xl my-5">
							U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION
						</h2>

						<p>
							(Completion is voluntary and will not subject you to adverse treatment) Our company
							values diversity. To ensure that we comply with reporting requirements and to learn
							more about how we can increase diversity in our candidate pool, we invite you to
							voluntarily provide demographic information in a confidential survey at the end of
							this application. Providing this information is optional. It will not be accessible or
							used in the hiring process, and has no effect on your opportunity for employment.
						</p>

						<div className="w-4/5">
							<div className="flex items-center my-8">
								<label htmlFor="" className="block text-xl w-[30%] mb-1">
									Gender
								</label>
								<Select
									className="w-[70%]"
									defaultValue={gender}
									options={genderSelectOptions}
									onChange={(e) => setGender(e.value)}
								/>
							</div>
							<div className="flex items-center mb-8">
								<label htmlFor="" className="block text-xl w-[30%] mb-1">
									Race
								</label>
								<Select
									className="w-[70%]"
									defaultValue={ethnicity}
									options={raceSelectOption}
									onChange={(e) => setEthnicity(e.value)}
								/>
							</div>
							<div className="flex items-center mb-8">
								<label htmlFor="" className="block text-xl w-[30%] mb-1">
									Vetran
								</label>
								<Select
									className="w-[70%]"
									defaultValue={vetran}
									options={vetranSelectOption}
									onChange={(e) => setVetran(e.value)}
								/>
							</div>
						</div>

						<div className="text-right my-20">
							<button className="bg-[#0562af] text-white  py-3 cursor-pointer px-10 mt-6 text-xl">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>

			{loading && <Loading />}
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
};

export default Application;
