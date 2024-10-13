const { userResourceOptions } = require("./resources/user");
const { dentistResourceOptions } = require("./resources/dentist");
const { clinicResourceOptions } = require("./resources/clinic");
const { jobPostingResourceOptions } = require("./resources/jobPosting");
const { applicationResourceOptions } = require("./resources/application");
const { notificationResourceOptions } = require("./resources/notification");
const { reviewResourceOptions } = require("./resources/review");
const { settingResourceOptions } = require("./resources/setting");
const { tagResourceOptions } = require("./resources/tag");
const { jobTagResourceOptions } = require("./resources/jobTag");

const resources = [
  { resource: require("../../database/src/models/User"), options: userResourceOptions },
  { resource: require("../../database/src/models/Dentist"), options: dentistResourceOptions },
  { resource: require("../../database/src/models/Clinic"), options: clinicResourceOptions },
  {
    resource: require("../../database/src/models/JobPosting"),
    options: jobPostingResourceOptions,
  },
  {
    resource: require("../../database/src/models/Application"),
    options: applicationResourceOptions,
  },
  {
    resource: require("../../database/src/models/Notification"),
    options: notificationResourceOptions,
  },
  { resource: require("../../database/src/models/Review"), options: reviewResourceOptions },
  { resource: require("../../database/src/models/Setting"), options: settingResourceOptions },
  { resource: require("../../database/src/models/Tag"), options: tagResourceOptions },
  { resource: require("../../database/src/models/JobTag"), options: jobTagResourceOptions },
];

module.exports = resources;
