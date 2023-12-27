import { createToken } from "../../../util/jwt/jwt";
import env from 'dotenv';
env.config()
export const loginUser_usecase = (dependencies:any)=>{
    const {repository:{userRepository}} = dependencies;
    if(!userRepository) throw new Error("No userRepository found");
    const execute = async(email: string , password: string)=>{
        //Getting ddata from the db using email
        console.log("Before checking the user in db")
        const userData = await userRepository.findUserByEmail(email);
        console.log("After checking the user in db")
        console.log(userData)
        if(userData) return {message:[{error:"User don't exist,please register"}]}
        const accessToken = createToken(userData,process.env.ACCESS_JWT_SECRET_KEY!)
        return {
            userData,
            accessToken,
        }
    }

    return {
        execute
    }
}