import { FETCH_ALL, CREATE, FETCH_POST, START_LOADING , END_LOADING ,DELETE, LIKE , FETCH_BY_SEARCH } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
      const { data } = await api.fetchPosts(page);
      dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }
};
export const getPostBySearch = (SearchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });  
      const { data : { data } } = await api.fetchPostsBySearch(SearchQuery);
      dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }
};
export const getPost = (id) => async (dispatch) => {
  try {
    console.log(id);
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = (post , navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });  
      const { data } = await api.createPost(post);
      navigate(`/posts/${data._id}`);
      dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};