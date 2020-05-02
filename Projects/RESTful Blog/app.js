var ejs				= require("ejs"),
	express 		= require("express"),
	mongoose 		= require("mongoose"),
	bodyParser		= require("body-parser"),
	methodOverride	= require("method-override");

var app = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost:27017/blogs",{ useNewUrlParser: true, useUnifiedTopology: true });

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: {type: String, default: "http://localhost:3000/images/blog.jpg"},
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);
 
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

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, blog){
		if(err) res.redirect("/blogs");
		else res.render("show", {blog: blog});
	});
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, blog){
		if(err) res.redirect("/blogs");
		else res.render("edit", {blog: blog});
	});
});

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog){
		if(err) res.redirect("/blogs");
		else res.redirect("/blogs/"+req.params.id);
	});
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
	// destroy blog
	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err) res.redirect("/blogs");
		// redirect
		else res.redirect("/blogs");
	});
	
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Connected!");
});