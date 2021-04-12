//const mongoose = require('mongoose');//in order to create modules and schemas
//require('dotenv').config();
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({ //or try without 'new'
    title: String,
    message: String,
    creator: String,
    tags: [String],//Array of string
    selectedFile: String, //convert images to string using base64
    likeCount: {
        type: Number,
        default:0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});
const postMessage  = mongoose.model('PostMessage', postSchema)//'posts' is the collection name
export default PostMessage;

//can we log from the server? 
//If the server didn't get any post requests than the client is doing something wrong 


// create a schema called postSchema with the following fields (types in parentheses): 
//title (string), message (string), creator (string), tags (array of strings), 
//selectedFile (string), likeCount (number; default: 0), createdAt (date; default: new Date()).  
//Use this schema to create a model called PostMessage.  Export PostMessage.