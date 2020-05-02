var ejs			= require("ejs"),
	express 	= require("express"),
	mongoose 	= require("mongoose"),
	bodyParser	= require("body-parser");

var app = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/blogs",{ useNewUrlParser: true, useUnifiedTopology: true });

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: {type: String, default: "/images/blog.jpg"},
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);
 
// Blog.create(
// 	{
// 		title: "My first blog", 
// 		body: "The default blog image is a picture I took in San Diego Zoo!"
// 	}, function(err, blog){
// 		if(err) console.log(err);
// 		else console.log("New blog created!")
// });

// RESTFUL ROUTES
app.get("/", function(req, res){
	res.redirect("/blogs");
});

// INDEX ROUT
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err) console.log("ERROR: " + err);
		else res.render("index", {blogs: blogs});
	})
});

// NEW ROUTE
app.get("/blogs/new", function(req, res){
	res.render("new",);
});

// CREATE ROUTE
app.post("/blogs", function(req, res){
	// create blog
	Blog.create(req.body.blog, function(err, blog){
		if(err) res.render("new");
		// redirect
		else{
			console.log("New blog created!");
			res.redirect("/blogs");	
		} 
	});
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Connected!");
});