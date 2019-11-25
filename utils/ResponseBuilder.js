/*
* 错误工具类
* @Author Lihao
* @Date 2019/11/25
* */

//返回错误对象
exports.buildDefaultResponse = function (data) {
  return {
    code: 200,
    data,
    message: 'success'
  }
};
