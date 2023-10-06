const GetUpdate = () => {
	return (
		<section className="flex justify-center flex-col bg-getupdate min-h-[300px] bg-cover bg-right text-center">
			<h1 className="font-bold text-4xl mb-5 text-red-900">Get Updates</h1>
			<p className="w-1/2 mx-auto mb-3">
				Our donors and partners help our health programs, medicines and supplies reach our neighbors
				in need in an average of more than 85 countries including the United States each year. Sign
				up below to get periodic updates and alerts.
			</p>
			<form>
				<input
					className="border border-black h-12 px-5"
					type="text"
					name="firstname"
					placeholder="First Name"
				/>
				<input
					className="border border-black h-12 px-5"
					type="text"
					name="firstname"
					placeholder="Last Name"
				/>
				<input
					className="border border-black h-12 px-5"
					type="email"
					name="firstname"
					placeholder="Email"
				/>
				<button className="h-12 bg-yellow-500 w-32 text-lg font-semibold">Submit</button>
			</form>
		</section>
	);
};

export default GetUpdate;
