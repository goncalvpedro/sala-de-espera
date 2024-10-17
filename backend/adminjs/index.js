const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSSequelize = require('@adminjs/sequelize');
const database = require('../../database/db');
const resources = require('./resources');

require('dotenv').config();

AdminJS.registerAdapter(AdminJSSequelize);

const setupAdminJs = (app) => {
  const adminJs = new AdminJS({
    databases: [database],
    rootPath: process.env.ADMINJS_PATH,
    resources: resources,
    // branding
  });

  const adminRouter = AdminJSExpress.buildRouter(adminJs);
  app.use(adminJs.options.rootPath, adminRouter);
};

module.exports = setupAdminJs;
