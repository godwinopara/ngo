import { useState } from "react";
import emailjs from "@emailjs/browser";
import { storage, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import logo from "../images/newLogo.svg";
import Select from "react-select";
import Loading from "../components/Loading";
import Success from "../components/Success";

const Application = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [gender, setGender] = useState("");
	const [ethnicity, setEthnicity] = useState("");
	const [vetran, setVetran] = useState("");
	const [degree, setDegree] = useState("");
	const [resume, setResume] = useState("");
	const [file, setFile] = useState(null);

	const [uploadSuccess, setUploadSuccess] = useState(false);
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

	const handleGenderChange = (e) => {
		setGender(e.target.value);
	};

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const fileRef = ref(storage, `resumes/${file.name + v4()}`);
		uploadBytes(fileRef, file).then((resumeLink) => {
			if (resumeLink) {
				setUploadSuccess(true);
				setLoading(false);
			}
		});

		setFirstname("");
		setLastname("");
		setEmail("");
		setAddress("");
		setCity("");
		setState("");
		setZipcode("");
		setPhoneNumber("");
		setGender("");
		setEthnicity("");
		setVetran("");
		setDegree("");
		setResume("");
	};

	return (
		<section className="py-8 text-[#808080] max-w-[900px] mx-auto">
			<img src={logo} className="w-[20%] mb-10" />
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
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setFirstname(e.target.value)}
									required
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2">Last Name</label>
								<input
									type="text"
									placeholder="firstname"
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
								<label className="block mb-2">Address Line</label>
								<input
									type="text"
									name=""
									id=""
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>
							<div className="w-full lg:mr-5">
								<label className="block mb-2">City</label>
								<input
									type="text"
									name=""
									id=""
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
									name=""
									id=""
									className="border border-black w-full h-10 rounded px-2"
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2">State</label>
								<input
									type="text"
									name=""
									id=""
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
									name=""
									id=""
									className="border border-black w-full h-10 rounded px-2"
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
							</div>
							<div className="w-full">
								<label className="block mb-2">Zip Code</label>
								<input
									type="text"
									name=""
									id=""
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
							<div className="w-full mr-5">
								<label htmlFor="" className="block mb-1">
									Institution
								</label>
								<input
									type="text"
									name=""
									id=""
									className="border border-black w-full h-10 rounded px-2"
								/>
							</div>
							<div className="w-full">
								<label htmlFor="" className="block mb-1">
									Degree
								</label>
								<Select defaultValue={degree} options={degreeSelectOption} />
							</div>
						</div>
					</div>
					<div>
						<h2 className="mb-1">Language</h2>
						<div className="grid grid-cols-2">
							<input
								type="text"
								name=""
								id=""
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
								<Select className="w-[70%]" defaultValue={gender} options={genderSelectOptions} />
							</div>
							<div className="flex items-center mb-8">
								<label htmlFor="" className="block text-xl w-[30%] mb-1">
									Race
								</label>
								<Select className="w-[70%]" defaultValue={ethnicity} options={raceSelectOption} />
							</div>
							<div className="flex items-center mb-8">
								<label htmlFor="" className="block text-xl w-[30%] mb-1">
									Vetran
								</label>
								<Select className="w-[70%]" defaultValue={vetran} options={vetranSelectOption} />
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

			{loading && !uploadSuccess && <Loading />}
			{!loading && uploadSuccess && <Success />}
		</section>
	);
};

export default Application;
