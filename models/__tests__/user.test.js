import startServer from '../../server';
import mongoose from 'mongoose';
mongoose.Promise = Promise;
//import { getUserConstructor, generateUser } from './helpers/utils';
import User from '../User';

let server;
beforeAll(() => startServer().then(s => (server = s)));
afterAll(done => server.close(done));

describe('Creating records', () => {
  it('saves a user', async () => {
    const u = new User({ email: 'aa@aa.fi', password: 'aaaaaa' });
    console.log('hello');
    await u.save();
    expect(u.isNew).toBeFalsy();

    /*return github.getUser('vnglst')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.name).toEqual('Koen van Gilst')
    })*/
  });
});
