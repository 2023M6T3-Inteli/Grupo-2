import { servicegetRanking } from "./service.js";


class ControllergetRanking {
    async exec(req, res){

        const {id} = req.params

        const rankUsers = await servicegetRanking.exec(id);
        res.send(rankUsers);
    }
    
}

export const controllergetRanking = new ControllergetRanking();
