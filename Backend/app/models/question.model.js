module.exports = mongoose => {
    const Question = mongoose.model(
      "question",
      mongoose.Schema(
        {
			title:{
				type:String,
			},
			body:{
				type:String,
				required:true
			},
			author:{
				type:String,
				required:true
			},
			upvotes:{
				type:Number
			},
			downvotes:{
				type:String,
			},
			answer:{
				type:String,
			}	
		},{ timestamps: true }
         )
    );
  
    return Question;
  };

