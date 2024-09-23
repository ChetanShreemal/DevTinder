const express = require("express");

const app = express();

app.use("",(req, res) => {
    res.send("Namste express server started ");
})

app.listen(3000, ()=>{
    console.log("express js server created successfully")
})