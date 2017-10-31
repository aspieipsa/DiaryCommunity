/*import startServer from '../../server'; // will not work now, need to wrap the server and export the function (not that easy as sounds)
import mongoose from 'mongoose';
mongoose.Promise = Promise;
//import { getUserConstructor, generateUser } from './helpers/utils';
import User from '../User';

let server;

// TODO: connect to a test database
beforeAll(() => startServer().then(s => (server = s)));
// TODO: delete collections and disconnect
afterAll(done => server.close(done));

describe('Creating records', () => {
  xit('saves a user', async () => {
    const u = new User({ email: 'aa@aa.fi', password: 'aaaaaa' });
    await u.save();
    expect(u.isNew).toBeFalsy();
  });
});
*/
