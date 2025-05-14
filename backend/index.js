const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.json({ message: "Backend ready" }));
const PORT = process.env.PORT || 3000; // Use AWS-assigned port or default to 3000
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));