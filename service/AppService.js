const AppDao = require("../dao/AppDao");

exports.getAppList = async function() {
  try {
    return await AppDao.queryAllApps();
  } catch (e) {}
};

exports.createApp = async function(app) {
  try {
    const createResult = await AppDao.createApp(app);
    console.log("创建结果 ==>", createResult);
    return createResult;
  } catch (e) {
    console.log("创建失败 ==>", e);
    return [{}];
  }
};
