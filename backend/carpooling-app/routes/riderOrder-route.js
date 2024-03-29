import express from "express";
import * as riderOrderController from '../controller/riderOrder-controller.js';

const router = express.Router();

//route the methods with controller logic
router.route('/')
   .post(riderOrderController.post)
   .get(riderOrderController.index);
 
//route the paramterized methods with controller logic 
router.route('/:id')
   .get(riderOrderController.find)
   .delete(riderOrderController.deleteRiderOrder)
   .patch(riderOrderController.updateRiderOrder)
   .put(riderOrderController.updateRiderOrder);


  export default router;

