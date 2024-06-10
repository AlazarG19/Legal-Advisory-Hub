module.exports = mongoose => {
    const ForumReport = mongoose.model(
      "forumReport",
      mongoose.Schema(
        {
			reportType: {
                type: String,
                required: true
              },
              reportedObjectId: {
                type: String,
                required: true
              },
              reportedBy: {
                type: String,
                required: true
              },
              reason: {
                type: String,
                required: true
              },
              resolved: {
                type: Boolean,
                default: false
              }	
		},{ timestamps: true }
         )
    );
  
    return ForumReport;
  };
