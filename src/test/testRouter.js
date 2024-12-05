import express from "express";
import { getTestController } from "./pingTestController.js";
import { PostTestController } from "./pingTestController.js";

const testRouter = express.Router()

testRouter.get('/ping', getTestController)
testRouter.post('/ping', PostTestController)


export default testRouter