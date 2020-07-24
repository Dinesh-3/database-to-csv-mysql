const express = require("express");
const app = express();
const router = require("./middleware/middleware.js")

app.use("/", router)

PORT = 3000
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));

