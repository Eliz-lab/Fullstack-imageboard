import * as api from '../api';
//Action creators

export const getPosts = () => async (dispatch)=> {
    try{
        const {data}= await api.fetchPosts()
        dispatch({
            type:'FETCH_ALL', 
            payload:data,
        });
    }catch(error){
        console.log(error.message);
    }
};

export const createPost =(post)=> async (dispatch)=> {
    try{
        const {data} = await api.createPost(post);
        dispatch({
            type:'CREATE', 
            payload: data,
        });
    }catch(error){
        console.log(error.message);
    }
}
//the getPosts function returns the action function ()=> ()=>
//dispatch the action