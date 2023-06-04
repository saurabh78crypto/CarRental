import express from "express";
import { regUser, regVehicle, addDriver, signin } from "../controller/auth.controller";

const auth = express.Router()

auth.post('/login', signin)
auth.post('/reguser', regUser)
auth.post('/regvehicle',regVehicle)
auth.post('/adddriver',addDriver)


export {auth}