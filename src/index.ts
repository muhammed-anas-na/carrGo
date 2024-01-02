import {app} from './app'
import {dbConenct} from './config/db'

const start = async()=>{
    try{
        await dbConenct()
    }catch(err){
        console.log("Error while connecting to db")
    }
}

app.listen(8000,()=>{
    console.log("Server started at port 8000")
})

start();