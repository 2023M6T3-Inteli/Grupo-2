import { ServiceputUpDown } from "./service.js";


class ControllergetRanking {
    async exec(req, res){

        const {id} = req.body

        const rankUsers = await ServiceputUpDown.exec(id);
        res.send(rankUsers);
    }
    
}

export const controllergetRanking = new ControllergetRanking();
