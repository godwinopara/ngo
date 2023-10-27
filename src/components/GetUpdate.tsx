import { useState } from "react";

const GetUpdate = () => {
	const [form, setForm] = useState({ firstname: "", lastname: "", email: "" });

	const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
		// e.preventDefault();
		setForm({ firstname: "", lastname: "", email: "" });
	};
	return (
		<section className="px-5 md:px-20 py-10 lg:py-0 lg:px-0 flex justify-center flex-col bg-getupdate min-h-[300px] bg-cover bg-right text-center">
			<h1 className="font-bold text-4xl mb-5 text-red-900">Get Updates</h1>
			<p className="lg:w-1/2 mx-auto mb-3">
				Our donors and partners help our health programs, medicines and supplies reach our neighbors
				in need in an average of more than 85 countries including the United States each year. Sign
				up below to get periodic updates and alerts.
			</p>
			<form onSubmit={handleForm} className="lg:flex lg:w-1/2 lg:mx-auto">
				<input
					className="mb-5 lg:mb-0 border border-black h-12 px-5 w-full"
					type="text"
					name="firstname"
					placeholder="First Name"
					onChange={(e) => setForm({ ...form, [e.target.name]: [e.target.value] })}
				/>
				<input
					className="mb-5 lg:mb-0 border border-black h-12 px-5 w-full"
					type="text"
					name="lastname"
					placeholder="Last Name"
					onChange={(e) => setForm({ ...form, [e.target.name]: [e.target.value] })}
				/>
				<input
					className="mb-5 lg:mb-0 border border-black h-12 px-5 w-full"
					type="email"
					name="email"
					placeholder="Email"
					onChange={(e) => setForm({ ...form, [e.target.name]: [e.target.value] })}
				/>
				<button className="block lg:inline-block mx-auto h-12 bg-yellow-500 w-32 text-lg font-semibold lg:w-1/2">
					Submit
				</button>
			</form>
		</section>
	);
};

export default GetUpdate;
