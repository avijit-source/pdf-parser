const express = require('express');
const fileUpload = require('express-fileupload');
const pdfparse = require("pdf-parse");

const app = express();

app.use("/",express.static("public"));
app.use(fileUpload());
app.post("/extract",(req,res) => {
    if(!req.files && !req.files.pdfFile){
        res.status(400);
        res.end()
    }
    pdfparse(req.files.pdfFile).then(result=>{
        res.send(result.text);
    })
})

app.listen(3000)