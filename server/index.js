//server -backend entry file (which is the root of the tree)
// npm install cors express mongoose
//npm start // index.js
//npme inity -y  // node -v // node --version //major.minor.patch
// new comment
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json({limit:'30mb', extended:true}));//use fecht for json
app.use(express.urlencoded({limit: '30mb', extended:true})); //set middleware to be able to get POSTED data
//If extended is false, you cannot post "nested object"
app.use(cors());
app.use('/posts',postRoutes);

const CONNECTION_URL = 'mongodb+srv://fullstack-project:J0OyUB3XzQMqBKcc@cluster0.u2oaa.mongodb.net/fullstack-project?retryWrites=true&w=majority'

const PORT = process.env.PORT ||5000;

mongoose.connect(CONNECTION_URL,{
    userNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running at http://localhost:${PORT}`);
    })
})
.catch((error)=> console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false); // to avoid warnings

//middleware that uses this router to handle get requests to the /posts route.
/* 
app.get('/posts', (req, res) => {
    res.send('Hello World!');
  }); */
