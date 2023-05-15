import { serviceLogin } from "./services.js";

class ControllerLogin {
    async exec(req, res){
        const user = await serviceLogin.exec(req.body);
        res.send(user);
    }
}

export const controllerLogin = new ControllerLogin();