# Fullstack-imageboard

Task 1: Routes Create a directory called routes. In routes, create a posts.js file. In posts.js, use express.Router to create a router for get requests to the /posts route. The request handler should respond with the string ‘Hello, world!’. In index.js create middleware that uses this router to handle get requests to the /posts route.

Task 2: Controllers Refactor routes/posts.js by defining the request handlers in controllers/posts.js and importing them into routes/posts.js.

Task 3: Models Create a models directory with a postMessage.js file. In postMessage.js, create a schema called postSchema with the following fields (types in parentheses): title (string), message (string), creator (string), tags (array of strings), selectedFile (string), likeCount (number; default: 0), createdAt (date; default: new Date()). Use this schema to create a model called PostMessage. Export PostMessage.

Task 4: getPosts Complete the getPosts function. In the try block, write code that uses the PostMessage model to retrieve all posts from the database. Render the array of all posts (so far empty) in the browser. If there is an error, return status code 404 with the error message.

Task 5: createPost Write a createPost function with the same structure as the getPosts function. In the function body, create a new post (a new instance of the PostMessage model) by passing the request body to the PostMessage constructor. In the try block save the new post to the database, respond with a status code meaning “Success: created”, and return the newly created post as JSON to the client. In the catch block, respond with a status code meaning “Client error: conflict” and return a JSON object with “message” as key and the error’s error message as value.

Task 6: Create functions in Form.js, Posts.js, and Post.js that return the strings FORM, POSTS, and POST, respectively.
