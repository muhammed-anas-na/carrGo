import dotenv from 'dotenv';
import { createToken } from '../../../util/jwt/jwt';
dotenv.config()

export const signup_usecase=(dependencies:any)=>{
    const {repository:{userRepository}} = dependencies;
    if(!userRepository) throw new Error("No userRepository found");
    const execute = async(first_name: string , last_name: string , email: string , phone: string , alt_number: string , password: string)=>{
        await userRepository.validate_signup({first_name,last_name,email,phone,alt_number,password})
        let userExist = await userRepository.findUserByEmail(email);
        if(userExist){
            throw new Error("User already exist")
        }else{
            let newUser = await userRepository.insertUser(first_name,last_name,email,phone,alt_number,password)
            const accessToken = createToken(newUser,process.env.ACCESS_JWT_SECRET_KEY!)
            return {
                newUser,
                accessToken
            }
        }
    }

    return {
        execute
    }
} 