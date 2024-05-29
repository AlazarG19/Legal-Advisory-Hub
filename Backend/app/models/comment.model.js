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
		},{ timestamps: true }
         )
    );
  
    return Comment;
  };

