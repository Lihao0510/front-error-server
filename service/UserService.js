const request = require("../network/http");

/*
* 用户登录功能
* 逻辑:
* 1.调用ERP2登录接口和获取用户信息接口,获取宜买车钉钉用户信息;
* 2.生成session,返回到用户的cookie中;
* 3.将用户信息保存到登录记录中;
* */
exports.login = async function(username, password, loginType = 1) {
  try {
    const oauthUrl = `https://oauth.erp.yiautos.com/oauth/token?type=${loginType}&grant_type=password&username=${username}&password=${password}&scope=trust`;

    const tokenResult = await request({
      url: oauthUrl,
      method: 'POST',
      auth: {
        username: 'crm-client',
        password: '$2a$10$hv1ZNontrZr8ptqVP6LhPekcIatksaeBZd3iRl1PM'
      }
    });

    const userInfo = await request({
      url: 'authorize/user/info',
      method: 'GET',
      params: {
        access_token: tokenResult.access_token
      }
    });

    return userInfo.principal;
  } catch (e) {
    console.log('出什么错误了 ==>', e)
  }
};
