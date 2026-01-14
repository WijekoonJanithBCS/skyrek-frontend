import express from 'express';
const itemRouter = express.Router();
import Item from '../models/item.js'; 
import { createItem, getAllItems } from '../controllers/itemController.js'; 

itemRouter.get('/', getAllItems);

itemRouter.post('/', createItem);   

export default itemRouter;

