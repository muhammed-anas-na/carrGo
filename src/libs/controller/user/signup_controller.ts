import {Request,Response,NextFunction} from 'express';

export default(dependencies:any)=>{
    const signup = async(req: Request,res: Response,next:NextFunction)=>{
        try{
            const {useCases:{signup_usecase}} = dependencies;
            const {first_name,last_name,email,phone,alt_number,password} = req.body;
            const response = await signup_usecase(dependencies).execute(first_name,last_name,email,phone,alt_number,password);
            console.log(response)
            res.status(200).json({
            })
        }catch(err){
            console.log("Something went wrong" ,err)
            next(err)
        }
    }

    return signup

}