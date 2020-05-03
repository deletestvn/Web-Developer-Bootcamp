var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2",{ useNewUrlParser: true, useUnifiedTopology: true });

// POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	]
});

var User = mongoose.model("User", userSchema);

// User.create({
// 	email: "eva@gmail.com",
// 	name: "Eva Yuan"
// });

// Post.create({
// 	title: "My favourite bubble tea in Montreal",
// 	content: "Royal No.9 with coffee jelly from The Alley"
// }, function(err, post){
// 	if(err) console.log(err);
// 	else{
// 		console.log(post);
// 		User.findOne({email: "eva@gmail.com"}, function(err, user){
// 			if(err) console.log(err);
// 			else{
// 				user.posts.push(post);
// 				user.save(function(err, data){
// 					if(err) console.log(err);
// 					else console.log(data);
// 				});
// 			}
// 		});
// 	} 
// });

User.find({email: "eva@gmail.com"}).populate("posts").exec(function(err, user){
	if(err) console.log(err);
	else console.log(user);
});
