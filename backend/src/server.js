const app = require("./app");
const sequelize = require("./config/db");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection did not worked.");
  });
  console.log(`Server is running at http://localhost:${PORT}/`);
});
