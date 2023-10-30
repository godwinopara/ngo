const Loading = () => {
	return (
		<div className="absolute top-0  h-screen max-w-[1000px] w-full flex items-center justify-center">
			<div className="bg-white shadow-xl h-[200px] w-[400px] flex flex-col items-center justify-center">
				<div>
					<div
						className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
						role="status"
					></div>
					<h2 className="mt-3">Submitting Application</h2>
				</div>
			</div>
		</div>
	);
};

export default Loading;
