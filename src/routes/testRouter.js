import express from "express";
import { getTestController } from "../controllers/pingTestController.js";
import { PostTestController } from "../controllers/pingTestController.js";

const testRouter = express.Router()

testRouter.get('/ping', getTestController)
testRouter.post('/ping', PostTestController)


export default testRouter