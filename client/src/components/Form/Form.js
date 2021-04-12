import React,{useState}from 'react'; //useState for hooks
import useStyles from "./styles";
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import {createPost}from '../../actions/posts';


const Form =()=>{
    //hooks
    const[postData, setPostData] =useState({ 
        creator: '', 
        title: '',
        message: '',
        tags:'',
        selectedFile: '',
    });

    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createPost(postData))
    };
    const clear =()=>{};
    return (
        <Paper className={classes.paper}>
            <form 
                className={`${classes.root} ${classes.form}`}
                autoComplete='off'
                noValidate 
                onSubmit={handleSubmit}
                >
                <Typography variant='h6'>Create Image Card</Typography>
                <TextField 
                name= 'Creator' 
                variant='outline' 
                lable='Creator' 
                fullWidth 
                value={postData.creator} 
                onChange={(e)=> setPostData({ ...postData,creator: e.target.value})}//update only the creator
                />

                <TextField 
                name= 'title'
                variant='outline' 
                lable='Title' 
                fullWidth 
                value={postData.title} 
                onChange={(e)=> setPostData({ ...postData,title: e.target.value})}
                />

                <TextField 
                name= 'message'
                variant='outline' 
                lable='Message' 
                fullWidth 
                value={postData.message} 
                onChange={(e)=> setPostData({ ...postData,message: e.target.value})}
                />

                <TextField 
                name= 'tags'
                variant='outline' 
                lable='Tags' 
                fullWidth 
                value={postData.tags} 
                onChange={(e)=> setPostData({ ...postData,tags: e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase64 type='file' mutiple={false} onDone={({base64})=> setPostData({...postData, selectorFile:base64})
                        }
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit} 
                    variant='contained'
                    color='primary'
                    size='large'
                    type='sbmit'
                    fullWidth
                >Submit</Button>
                <Button 
                    variant='contained'
                    color='secondary'
                    size="small"
                    fullWidth onClick={clear}>Clear</Button>
            </form>

        </Paper>
    )
};

export default Form

//Create a <form> in components/Form/Form.js component. Add input fields with names creator, title, message, tags and selectedFile. In order to upload file use
//reset the initial state of selected file to something else than "". That way the behaviour can be debugged. 