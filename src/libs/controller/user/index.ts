import login_controller from "./login_controller";
import signup_controller from "./signup_controller";

export default (dependencies:any)=>{
    return {
        login_controller:login_controller(dependencies),
        signup_controller:signup_controller(dependencies)
    }
}