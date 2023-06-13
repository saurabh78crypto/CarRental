import express from "express";
import { regUser, regVehicle, addDriver, signin,getvehicleList, getVehicleDetails, newLocation, getLocation } from "../controller/auth.controller";

const auth = express.Router()

//GET
auth.get('/getvehicleList',getvehicleList )
auth.get('/getvehicledetails',getVehicleDetails)
auth.get('/getlocation',getLocation)

//POST
auth.post('/login', signin)
auth.post('/reguser', regUser)
auth.post('/regvehicle',regVehicle)
auth.post('/adddriver',addDriver)
auth.post('/newlocation',newLocation)

export {auth}