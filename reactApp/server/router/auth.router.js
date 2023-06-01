import express from "express";
import { regUser } from "../controller/auth.controller";

const auth = express.Router()

auth.post('/reguser', regUser)

export {auth}