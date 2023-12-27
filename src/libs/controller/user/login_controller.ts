import { Request , Response } from "express"

export default (dependencies:any)=>{
    const login =  async(req: Request,res: Response)=>{
        try{
            console.log(dependencies)
            const {useCases:{loginUser_usecase}} = dependencies
            const {email,password} = req.body;
            const response = await loginUser_usecase(dependencies).execute(email,password);
            if(response.message){
                res.json(response)
            }else{
                const {userData,accessToken,} = response
                res.status(200).json({userData,accessToken})
            }
        }catch(err){
            console.log("Something went wrong." , err)
        }

    }
    return login
}