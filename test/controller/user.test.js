'use strict';

const supertest = require('supertest');
const os = require('os');
const pkg = require('../../package.json');
const app = require('../../app');

let server = app.listen();

/* afterAll(async done => {
  await server.close && server.close();
}); */

describe('Test User Controller', () => {
  const request = supertest(server);

  it('test login', async done => {
    const res = await request
      .get('/users/login')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.statusCode).toBe(200);

    done();
  });
});
