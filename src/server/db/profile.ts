import { Connection } from './index';

const all = async () => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query("SELECT * FROM users", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}



export default {
    all
}