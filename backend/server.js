import express from "express";
import cors from "cors";
import connectToDb from "./utils/connect.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("API is running");
});

// connect to Mongo Atlas
connectToDb();
// mongoose
//   .connect("mongodb://localhost:5000/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Successfully connected to mongodb");
//   });

//listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on localhost at port: ${PORT}`);
});
