module.exports = mongoose => {
    const Thread = mongoose.model(
      "thread",
      mongoose.Schema(
        {
			userId:{
				type:String,
			},
			conversation: 
				{
					user: {
						type:String,
					},
					assistant:{
						type:String,
					},
				 },
		},{ timestamps: true }
         )
    );
  
    return Thread;
  };
