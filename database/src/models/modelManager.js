const User = require("./User");
const Dentist = require("./Dentist");
const Clinic = require("./Clinic");
const JobPosting = require("./JobPosting");
const Application = require("./Application");
const Notification = require("./Notification");
const Review = require("./Review");
const Setting = require("./Setting");
const Tag = require("./Tag");
const JobTag = require("./JobTag");

// Relacionamento entre User e Dentist (1:1)
User.hasOne(Dentist, { foreignKey: 'user_id' });
Dentist.belongsTo(User, { foreignKey: 'user_id' });

// Relacionamento entre User e Clinic (1:1)
User.hasOne(Clinic, { foreignKey: 'user_id' });
Clinic.belongsTo(User, { foreignKey: 'user_id' });

// Relacionamento entre Clinic e JobPosting (1:N)
Clinic.hasMany(JobPosting, { foreignKey: 'clinic_id' });
JobPosting.belongsTo(Clinic, { foreignKey: 'clinic_id' });

// Relacionamento entre Dentist e Application (1:N)
Dentist.hasMany(Application, { foreignKey: 'dentist_id' });
Application.belongsTo(Dentist, { foreignKey: 'dentist_id' });

// Relacionamento entre JobPosting e Application (1:N)
JobPosting.hasMany(Application, { foreignKey: 'job_posting_id' });
Application.belongsTo(JobPosting, { foreignKey: 'job_posting_id' });

// Relacionamento entre User e Notification (1:N)
User.hasMany(Notification, { foreignKey: 'user_id' });
Notification.belongsTo(User, { foreignKey: 'user_id' });

// Relacionamento entre User e Review (N:N)
User.hasMany(Review, { as: 'ReviewsGiven', foreignKey: 'reviewer_id' });
User.hasMany(Review, { as: 'ReviewsReceived', foreignKey: 'reviewed_id' });
Review.belongsTo(User, { as: 'Reviewer', foreignKey: 'reviewer_id' });
Review.belongsTo(User, { as: 'Reviewed', foreignKey: 'reviewed_id' });

// Relacionamento entre User e Setting (1:1)
User.hasOne(Setting, { foreignKey: 'user_id' });
Setting.belongsTo(User, { foreignKey: 'user_id' });

// Relacionamento entre JobPosting e Tag (N:M)
JobPosting.belongsToMany(Tag, { through: JobTag, foreignKey: 'job_posting_id' });
Tag.belongsToMany(JobPosting, { through: JobTag, foreignKey: 'tag_id' });


module.exports = {
  User,
  Dentist,
  Clinic,
  JobPosting,
  Application,
  Notification,
  Review,
  Setting,
  Tag,
  JobTag,
};
