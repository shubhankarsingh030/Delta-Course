const express = require("express");
const app = express();


let port = 3000;

app.listen(port, () => {
    console.log(`app is listneing on port ${port}`)
});

app.get("/",(req, res) => {
    res.send("You Contacted root Path")
});
app.get("/apple",(req, res) => {
    res.send("You Contacted apple Path")
});
app.get("/banana",(req, res) => {
    res.send("You Contacted banana Path")
});

app.get("*",(req,res) =>{
    res.send("This Path Does Not Exist")
})

// app.use((req, res) => {
//     console.log("Request received");
//     res.send("This Is just starting");
// });

