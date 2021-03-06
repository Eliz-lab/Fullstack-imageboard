import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import {useDispatch}from 'react-redux';
import {getPosts} from './actions/posts'

import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form';

import useStyles from './styles';
import camera from "./images/camera.png";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color= 'inherit'>
        <Typography variant='h2' align="center">
         Imageboard
        </Typography>
        <img src={camera} alt='icon' height='60'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify= 'space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Form>

            </Form>
          </Grid>
        </Grid>
      </Container>
    </Grow>
    </Container>
  );
};
export default App;
//npm install react-file-base64 --legacy-peer-deps 
//Create functions in Form.js, Posts.js, and Post.js that return the <h1> strings FORM, POSTS, and POST, respectively. (e.g. <h1>FORM</h1>).