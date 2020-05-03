var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2",{ useNewUrlParser: true, useUnifiedTopology: true });

var Post = require("./models/post");
var User = require("./models/user");


// User.create({
// 	email: "eva@gmail.com",
// 	name: "Eva Yuan"
// });

// Post.create({
// 	title: "My favourite pizza in Montreal",
// 	content: "Hawaii pizza with extra pineapple and ham from Domino Pizza"
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

User.findOne({email: "eva@gmail.com"}).populate("posts").exec(function(err, user){
	if(err) console.log(err);
	else console.log(user);
});
