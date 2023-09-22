const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors(
  {origin:"*"}
));


const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const facilityRoutes = require("./routes/facilityRoute");
dotenv.config();

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const dbconnect = require("./config/db");
const schedulerRoutes = require("./routes/routeschdeuler");
const profileRoutes = require("./routes/profileRoute");

dbconnect();

app.use(express.json({ extended: true }));
app.use("/api/user", userRoutes);
app.use("/api/user/", profileRoutes);
app.use("/api/facility/", facilityRoutes);
app.use("/api", schedulerRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));

app.get("/", (req, res) => {
  res.send("API is runn000ingooo..");
});
