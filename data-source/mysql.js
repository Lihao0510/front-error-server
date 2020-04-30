const mysql = require('mysql2/promise');
const DataConfig = require('../config/Data');
console.log('即将创建连接池 ==>');

// 创建一个默认配置的连接池
const pool = mysql.createPool({
  host: DataConfig.host,
  user: DataConfig.user,
  password: DataConfig.password,
  database: DataConfig.database,
  // 应该设置编码（省略在某些情况下会有错误）
  charset: 'utf8',

  // 以下选项均为默认值（如果不需要变动可省略）
  // acquireTimeout: 10000, //获取连接的毫秒
  // 为true时，连接排队等待可用连接。为false将立即抛出错误
  waitForConnections: true,
  // 单次可创建最大连接数
  connectionLimit: 20,
  // 连接池的最大请求数，从getConnection方法前依次排队。设置为0将没有限制
  queueLimit: 0
});

module.exports = pool;
