const mongoose = require("mongoose");
const subTopicSchema = mongoose.Schema({
	sub_title: {
		type: String,
		
	},
	diagram: {
		type: String,
	},
	formulae: {
		type: String,
	},
	table_img: {
		type: String,
	},
	description: {
		type: String,
	},
	imp_note: {
		type: String,
	},
	points: {
		type: String,
	},
	point_style: {
		type: String,
		default: "unordered",
	},
});
const topicSchema = mongoose.Schema({
	topic_title: {
		type: String,
		
	},
	audio:{
		type:String,
	},
	video:{
		type:String,
		
	},
	objective: {
		type: String,
		
	},
	sub_topic: [subTopicSchema],
});
const chapterSchema = mongoose.Schema({
	chapter_title: {
		type: String,
		
	},
	lecture_hrs: {
		type: Number,
	},
	index: {
		type: Number,
		
	},
	topics: [topicSchema],
});
const bookSchema = mongoose.Schema(
	{
		tags: [],
		author: {
			type: String,
			
		},
		book_title: {
			type: String,
			
		},
		cover_page: {
			type: String,
			
		},
		rating: {
			type: Number,
			
		},
		price: {
			type: Number,
			
		},
		chapters: [chapterSchema],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
