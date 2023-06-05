const express = require("express");
const colors= require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());
app.use(moragan("dev"));
app.get("/",(req,res)=>{
    res.status(200).send({
        message:"server running",
    });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
