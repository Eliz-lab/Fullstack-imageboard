import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import Post from './PostPost';
import {useSelector} from 'react-redux';
import useStyles from './styles';

const Posts =()=>{
    const posts = useSelector((state)=> state.posts);
    console.log(posts);

    const classes = useStyles();
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map((post)=>(  //create new array
                    <Grid key={post._id} item sx={12} sm={6} md={6}>
                        <Post post={post} />
                    </Grid>
            ))}
        </Grid>
        )
    );
};
export default Posts;