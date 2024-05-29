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

			reported:{
				type:Boolean,
			}	
		},{ timestamps: true }
         )
    );
  
    return Answer;
  };
