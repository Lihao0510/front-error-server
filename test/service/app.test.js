const AppService = require("../../service/AppService");


describe('Test App Service', () => {
  it('Delete Service', async done => {
    const res = await AppService.deleteApp(29);
    console.log('登录结果 ==>', res);
    expect(res.code).toBe(200);
    done();
  });
});
