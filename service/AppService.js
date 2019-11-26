const AppDao = require("../dao/AppDao");
const ErrorHandler = require("../utils/ErrorHandler");
const ResponseBuilder = require("../utils/ResponseBuilder");
const BasicUtil = require("../utils/BasicUtil");
const SqlHelper = require("../utils/SqlHelper");

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
    const appRandomId = BasicUtil.getRandomId();
    const appSecret = BasicUtil.getRandomPassword();
    const [rows, fields] = await AppDao.createApp({
      ...app,
      app_key: appRandomId,
      app_secret: appSecret
    });
    if (rows.insertId) {
      return ResponseBuilder.buildDefaultResponse(rows.insertId);
    } else {
      throw new Error("App创建失败,名称重复!");
    }
  } catch (e) {
    return ErrorHandler(e);
  }
};

//更新App信息
exports.updateApp = async function(appId, params) {
  try {
    const [rows, fields] = await AppDao.updateApp(appId, SqlHelper.buildUpdateSql(params));
    if (rows.affectedRows) {
      return ResponseBuilder.buildDefaultResponse(rows.affectedRows);
    } else {
      throw new Error("更新失败,请检查参数!");
    }
  } catch (e) {
    return ErrorHandler(e);
  }
};

//删除指定App信息
exports.deleteApp = async function(appId) {
  try {
    const [rows, fields] = await AppDao.deleteApp(appId);
    console.log('结果 ==>', rows, fields);
    if (rows.affectedRows > 0) {
      return ResponseBuilder.buildDefaultResponse(rows.affectedRows);
    } else {
      throw new Error("删除失败,指定的App不存在!");
    }
  } catch (e) {
    return ErrorHandler(e);
  }
};
