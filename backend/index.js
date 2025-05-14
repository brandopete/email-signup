const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.json({ message: "Backend ready" }));
app.listen(3000, () => console.log("Server on http://localhost:3000"));