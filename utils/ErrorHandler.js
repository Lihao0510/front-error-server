/*
* 错误工具类
* @Author Lihao
* @Date 2019/11/25
* */

//返回错误对象
module.exports = function (e) {
  return {
    code: 500,
    data: e.message,
    message: e.message
  }
};
