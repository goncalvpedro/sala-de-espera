const express = require("express");
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSSequelize = require("@adminjs/sequelize");
const database = require("../../database/db");
const resources = require("../adminjs/resources");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

AdminJS.registerAdapter(AdminJSSequelize);

app.get("/", (req, res) => {
  res.send("Express is running as expected.");
});

const setupAdminJs = () => {
  const adminJs = new AdminJS({
    databases: [database],
    rootPath: "/admin",
    resources: resources,
  });

  const adminRouter = AdminJSExpress.buildRouter(adminJs);

  app.use(adminJs.options.rootPath, adminRouter, () => {
  });
};

setupAdminJs();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    error: "Unexpected condition made it impossible to complete the request.",
  });
});

module.exports = app;
