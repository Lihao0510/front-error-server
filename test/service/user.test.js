const UserService = require("../../service/UserService");


describe('Test User Service', () => {
  it('test login', async done => {
    const res = await UserService.login('17786123214', '123456');
    console.log('登录结果 ==>', res);
    expect(res.code).toBe(200);
    done();
  });
});
