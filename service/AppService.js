const AppDao = require("../dao/AppDao");
const ErrorHandler = require("../utils/ErrorHandler");
const ResponseBuilder = require("../utils/ResponseBuilder");

//获取当前应用列表
exports.getAppList = async function() {
  try {
    const [rows, fields] = await AppDao.queryAllApps();
    return ResponseBuilder.buildDefaultResponse(rows);
  } catch (e) {
    return ErrorHandler(e);
  }
};

//创建新的App
exports.createApp = async function(app) {
  try {
    const [rows, fields] = await AppDao.createApp(app);
    if (rows.insertId) {
      return ResponseBuilder.buildDefaultResponse(rows.insertId);
    } else {
      throw new Error("App创建失败,名称重复!");
    }
  } catch (e) {
    return ErrorHandler(e);
  }
};
