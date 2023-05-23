import {describe, it, expect} from "vitest"
import {servicegetRanking} from './service'

describe("Ranking",()=>{
    it("should return ranking users !", async ()=>{
        const request = await servicegetRanking.exec(1)

        expect(request).length(11)
    })
})


// import express from 'express';
// import { servicegetRanking } from './path/para/o/arquivo';

// const app = express();
// const port = 3000;

// app.get('/ranking/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const ranking = await servicegetRanking.exec(parseInt(id));
//     res.json(ranking);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
