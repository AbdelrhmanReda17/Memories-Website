import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost , getPostsBySearch } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/search',  getPostsBySearch);
router.get('/',  getPosts);
router.post('/', auth , createPost);
router.patch('/:id', auth , updatePost);
router.delete('/:id', auth , deletePost);
router.patch('/:id/likePost', auth, likePost);
router.get('/:id', getPost);

export default router;