import express from "express";
import { regUser, regVehicle, addDriver, signin,getvehicleList } from "../controller/auth.controller";

const auth = express.Router()

auth.get('/getvehicleList',getvehicleList )

auth.post('/login', signin)
auth.post('/reguser', regUser)
auth.post('/regvehicle',regVehicle)
auth.post('/adddriver',addDriver)


export {auth}