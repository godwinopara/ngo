import { useState } from "react";
import emailjs from "@emailjs/browser";

const Application = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [country, setCountry] = useState("USA");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [gender, setGender] = useState("");
	const [ethnicity, setEthnicity] = useState("");
	const [file, setFile] = useState(null);

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const uploadedFile = e.target.files[0];
		if (uploadedFile) {
			setFile(uploadedFile);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(firstname);

		const formData = new FormData();
		formData.append("name", firstname);
		formData.append("email", email);
		formData.append("phone", phoneNumber);
		formData.append("resume", file);

		try {
			await fetch("http://localhost:4000/upload", {
				method: "POST",
				body: formData,
			});

			// Display a success message to the user.
		} catch (error) {
			console.log(error);
			// Handle any errors that occur during the upload.
		}
	};

	return (
		<div className="w-3/5 mx-auto p-10">
			<form onSubmit={handleSubmit}>
				<h2 className="text-3xl mb-8 font-semibold">Contact Information</h2>

				{/* Contact Details */}
				<div>
					<div className="flex mb-5">
						<div className="w-full mr-10">
							<label className="block text-lg mb-1">First Name</label>
							<input
								type="text"
								placeholder="firstname"
								className="border border-black w-full h-10 rounded px-2"
								onChange={(e) => setFirstname(e.target.value)}
							/>
						</div>
						<div className="w-full">
							<label className="block mb-2">Last Name</label>
							<input
								type="text"
								placeholder="firstname"
								className="border border-black w-full h-10 rounded px-2"
								onChange={(e) => setLastname(e.target.value)}
							/>
						</div>
					</div>
					<div className="grid grid-cols-2">
						<div>
							<label className="block mb-2">Email</label>
							<input
								type="text"
								placeholder="Email"
								className="border border-black w-full h-10 rounded px-2"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
				</div>

				{/* Upload Attachment */}
				<div>
					<h2 className="text-3xl my-8 font-semibold">Upload Attachment</h2>
					<div className="mb-4">
						<label className="block mb-2">Upload Resume</label>
						<input type="file" onChange={handleFileUpload} />
					</div>
				</div>

				{/* ================== Contact Details ======================= */}
				<div>
					<h2 className="text-3xl my-8 font-semibold">Contact Details</h2>
					<div className="flex items-center">
						<div className="w-full mr-5">
							<label className="block mb-2">Address Line</label>
							<input
								type="text"
								name=""
								id=""
								className="border border-black w-full h-10 rounded px-2"
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>
						<div className="w-full mr-5">
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
					<div className="flex items-center">
						<div className="w-full mr-5">
							<label className="block mb-2">Country</label>
							<input
								type="text"
								name=""
								id=""
								className="border border-black w-full h-10 rounded px-2"
								onChange={(e) => setCountry(e.target.value)}
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
					<div className="flex items-center">
						<div className="w-full mr-5">
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
					<div className="flex items-center mb-5">
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
								Graduation Date
							</label>
							<input
								type="text"
								name=""
								id=""
								className="border border-black w-full h-10 rounded px-2"
							/>
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
					<h2 className="font-bold text-2xl my-5">Compliance Questions</h2>
					<div className="mb-3">
						<label className="block mb-2">Do You have any disabilities</label>
						<select name="" id="" className="border border-black px-5 py-2 rounded">
							<option value="yes">Yes, I have a disability or had one in the past</option>
							<option value="no">No, I don't have any disability or had one in the past</option>
							<option value="noanswer">I do not want to answer</option>
						</select>
					</div>
					<div className="mb-3">
						<label className="block mb-2">Gender</label>
						<select
							onChange={(e) => setGender(e.target.value)}
							name=""
							id=""
							className="border border-black px-5 py-2 rounded"
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<div className="mb-3">
						<label className="block mb-2">Ethnicity</label>
						<select
							onChange={(e) => setEthnicity(e.target.value)}
							name=""
							id=""
							className="border border-black px-5 py-2 rounded"
						>
							<option value="latino">Hispanic or Latino</option>
							<option value="asia">Asia</option>
							<option value="nativeamerica">Native America</option>
							<option value="blackamerica">Black America</option>
							<option value="latino">Caucasian</option>
							<option value="other">other</option>
						</select>
					</div>

					<div>
						<h3 className="mb-2">Please select your Veteran Status (VETS-4212):</h3>
						<select name="" id="" className="border border-black px-5 py-2 rounded">
							<option value="veteran">I identify as a veteran</option>
							<option value="noveteran">I don't identify as a veteran</option>
						</select>
					</div>

					<div className="text-right my-20">
						<button className="bg-[#0562af] text-white  py-3 cursor-pointer px-10 mt-6 text-xl">
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Application;
