module.exports = mongoose => {
	const Thread = mongoose.model(
		"thread",
		mongoose.Schema(
			{
				userId: {
					type: String,
				},
				isUserMessage: {
					type: Boolean,
				},
				text: {
					type: String,
				},
			}, { timestamps: true }
		)
	);

	return Thread;
};
