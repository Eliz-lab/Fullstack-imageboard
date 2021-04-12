
//import {response} from 'express';
import PostMessage from '../models/postMessage.js';

export const getPosts =  async (req, res) =>{
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};

export const createPost = async (req, res) =>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
            res.status(409).jason(error);
    }
 };
 //export {getPosts, createPost}
 

//https://restapitutorial.com/httpstatuscodes.html


//send data to database
/* mongoDb.addComment(req.body.name, new Date(), req.body.comment).then(() =>{
    
    mongoDb.getComments().then(comments =>{
        res.render('posts', {commentsArr: comments});

    }).catch(error =>{
        console.log(error);
        res.render('posts',{commentsArr: []});
    })
   
}).catch(error =>{
    res.send(error.message);
}) */
    
//---------------------------



//Complete the getPosts function.  
//In the try block, write code that uses the PostMessage model to retrieve all posts from the database.  
//Render the array of all posts (so far empty) in the browser.  
//If there is an error, return status code 404 with the error message.  Check your work 