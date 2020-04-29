REST - a mapping between HTTP routes and CRUD

BLOG

Name 		Path 				HTTP Verb 		Purpose
INDEX 		/blogs				GET				List all blogs
NEW			/blogs/new 			GET				Show new blog form
CREATE		/blogs 				POST 			Create a new blog, then redirect somewhere
SHOW		/blogs/:id 			GET 			Show info about one specific blog
EDIT		/blogs/:id/edit 	GET 			Show edit fomr for one blog
UPDATE		/blogs/:id 			PUT 			Update a particular blog, then redirect somewhere
DESTROY		/blogs/:id  		DELETE         	Delete a particular blog, then redirect somewhere