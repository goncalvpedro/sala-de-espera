const sequelize = require("../../database/db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected.")
  })
  .catch((err) => {
    console.log(`Database connection failed. Check the error below:\n${err}`);
  });
  console.log(`Server is running successfully at:\nhttp://localhost:${PORT}/`);
});
