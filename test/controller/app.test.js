'use strict';

const supertest = require('supertest');
const os = require('os');
const pkg = require('../../package.json');
const app = require('../../app');

let server = app.listen();

/*afterAll(async done => {
  await server.close && server.close();
});*/

describe('Test App Controller', () => {

  const request = supertest(server);

  it('test create app', async done => {
    const res = await request
      .get('/app/create')
      .expect('Content-Type', /json/)
      .expect(200);

    console.log('创建结果 ==>', res.body);

    expect(res.statusCode).toBe(200);

    done()
  });
});
