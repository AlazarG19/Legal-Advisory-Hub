module.exports = mongoose => {
    const Question = mongoose.model(
      "question",
      mongoose.Schema(
        {
			title:{
				type:String,
			},
			author:{
				type:String,
				required:true
			},
			category:{
				type:String,
				required:true
			},
			upvotes:{
				type:Number
			},
			downvotes:{
				type:String,
			},
			reported:{
				type:Boolean,
			},
		},{ timestamps: true }
         )
    );
  
    return Question;
  };

