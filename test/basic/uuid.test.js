const BasicUtil = require('../../utils/BasicUtil');
const SqlHelper = require('../../utils/SqlHelper');

describe('Test Basic Tools', () => {
  it('test getuuid', async done => {
    const randomId = BasicUtil.getRandomId();
    console.log(randomId);

    expect(randomId).toBeTruthy();
    done()
  });

  it('test sql update language', async done => {
    const updateSql = SqlHelper.buildUpdateSql({
      "name":"经纪人小程序",
      "type":4,
      "owner_email":"liha@itsmycar.cn",
      "remark":"经纪人2小程序"
    });

    console.log(updateSql);

    expect(updateSql).toBeTruthy();
    done()
  });
});
