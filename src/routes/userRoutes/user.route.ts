import express  from "express"
import {userController} from '../../libs/controller'

export default (dependencies:any)=>{
    const router = express.Router();
    const {login_controller , signup_controller} = userController(dependencies)
    router.post('/login' , login_controller)
    router.post('/signup' , signup_controller)
    return router
}