const pool = require('../data-source/mysql');

exports.queryAllApps = async function () {
  return await pool.query('select * from app');
};

exports.createApp = async function (app) {
  return await pool.query('INSERT INTO app SET ?', app);
};

exports.updateApp = async function (id, params) {
  return await pool.execute(`UPDATE front_error.app SET ${params} WHERE id = ?`, [id]);
};

exports.deleteApp = async function (appId) {
  return await pool.execute('DELETE FROM front_error.app WHERE id = ?', [appId]);
};
