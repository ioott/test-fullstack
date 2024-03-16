import * as express from 'express';
import validateData from '../middlewares/validateCustommer.middleware';
import {
  allCustommers,
  createCustommer,
  updateCustommer,
  deleteCustommer,
  findCustommerById,
  homePage } from '../controllers/CustommersController';

const router = express.Router();

router.get('/', homePage);
router.get('/custommers',allCustommers);
router.post('/custommer', validateData, createCustommer);
router.put('/custommer/:id', validateData, updateCustommer);
router.get('/custommer/:id', validateData, findCustommerById);
router.delete('/custommer/:id', validateData, deleteCustommer);

export default router;
