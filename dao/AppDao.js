const pool = require("../data-source/mysql");

exports.queryAllApps = async function () {
  return await pool.query("select * from app");
};

exports.createApp = async function (app) {
  return await pool.query("INSERT INTO app SET ?", app);
};
