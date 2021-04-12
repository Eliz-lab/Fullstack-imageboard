import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();
router.get('/', getPosts)

router.post('/', createPost);

export default router;

   
//Refactor routes/posts.js by defining the request handlers in controllers/posts.js and importing them into routes/posts.js











// In posts.js, use express.Router to create a router for get requests to the /posts route.  
//The request handler should respond with the string ‘Hello, world!’.  