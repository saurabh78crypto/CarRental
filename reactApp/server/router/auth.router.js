import express from "express";
import { regUser, regVehicle, addDriver, signin,getvehicleList, getVehicleDetails } from "../controller/auth.controller";

const auth = express.Router()

auth.get('/getvehicleList',getvehicleList )
auth.get('/getvehicledetails',getVehicleDetails)

auth.post('/login', signin)
auth.post('/reguser', regUser)
auth.post('/regvehicle',regVehicle)
auth.post('/adddriver',addDriver)


export {auth}