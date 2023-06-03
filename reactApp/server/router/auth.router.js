import express from "express";
import { regUser, regVehicle, addDriver } from "../controller/auth.controller";

const auth = express.Router()

auth.post('/reguser', regUser)
auth.post('/regvehicle',regVehicle)
auth.post('/adddriver',addDriver)

export {auth}