import * as express from 'express';
import db from './db';
const router = express.Router();

export interface IGetUserAuthInfoRequest extends Request {
  user: string // or any other type
}

router.get('/api/profile', async (req, res) => {
    try{
        let profile = await db.Profile.all();
        res.json(profile);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
    
export default router;