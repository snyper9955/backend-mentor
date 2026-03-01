const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");
const messageRoutes = require("./src/routes/messageRoutes");
const activity = require("./src/routes/activity");

const app = express();

// ✅ CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());





// ✅ Routes (Better Structure)
app.use("/api/auth", authRoutes);
app.use("/api", messageRoutes);
app.use("/api/activity", activity);





app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running 🚀",
  });
});



module.exports = app;