import { Connection } from './index';

export const all = async () => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query("SELECT * FROM expenses", (err, results) => {
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