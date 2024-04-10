module.exports = mongoose => {
    const Answer = mongoose.model(
      "answer",
      mongoose.Schema(
        {
			questionId:{
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
			comment:{
				type:String,
			}	
		},{ timestamps: true }
         )
    );
  
    return Answer;
  };
