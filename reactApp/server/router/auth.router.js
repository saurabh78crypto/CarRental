import express from "express";
import { regUser, regVehicle, addDriver, signin, getvehicleList, getVehicleDetails, newLocation, getLocationList, newRide, loginDriver } from "../controller/auth.controller";

const auth = express.Router()

//GET
auth.get('/getvehicleList',getvehicleList )
auth.get('/getvehicledetails',getVehicleDetails)
auth.get('/getlocationList',getLocationList)

//POST
auth.post('/login', signin)
auth.post('/loginDriver',loginDriver)
auth.post('/reguser', regUser)
auth.post('/regvehicle',regVehicle)
auth.post('/adddriver',addDriver)
auth.post('/newlocation',newLocation)
auth.post('/newride',newRide)

export {auth}