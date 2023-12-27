    import { loginUser_usecase, signup_usecase } from "../libs/useCases";
import userRepository from "../app/repository/user.repository";

const useCases:any = {
    loginUser_usecase,
    signup_usecase
}

const repository:any = {
    userRepository
}

export default {useCases , repository}

