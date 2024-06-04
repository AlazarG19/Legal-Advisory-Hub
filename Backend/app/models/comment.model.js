module.exports = mongoose => {
    const Comment = mongoose.model(
      "comment",
      mongoose.Schema(
        {
            postId:{
				type:String,
				required:true
			},

			body:{
				type:String,
				required:true
			},
			author:{
				type:String,
				required:true
			},	
			reported:{
				type:Boolean,
			}
		},{ timestamps: true }
         )
    );
  
    return Comment;
  };

