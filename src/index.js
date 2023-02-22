const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const { json } = require('express');
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());



app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res) => {
    res.send("Hello World!")
})
app.post("/add",(req,res) => {
    const {num1,num2}=req.body;
   
    
    let ans = num1 + num2;
      if (typeof(num1) == "string" || typeof(num2) == "string" )
      {
        res.status(500).send("Invalid data types")
      }
    else if (num1 < -1000000 || num2 < -1000000 || ans < -1000000)
    {  res.status(500).send("Underflow")}
   
     else if (num1 >1000000 || num2 >1000000 || ans > 1000000)
    {    
        res.status(500).send("Overflow")
    }

    else { res.status(200).send(`the sum of given two numbers : ${ans.toString()}`)
         }
    
})
app.post("/sub",(req,res) => {
    const {num1,num2}=req.body;
    let ans = num1 - num2;

    if (num1 < -1000000 || num2 < -1000000 || ans < -1000000)
    {  res.status(500).send("Underflow")}
   else if (typeof(num1) == "string" || typeof(num2) == "string" )
      {
        res.status(500).send("Invalid data types")
      }
   
     else if (num1 >1000000 || num2 >1000000 || ans > 1000000)
    {    console.log(ans)
        res.status(500).send("Overflow")
    }

    else{
    res.status(200).send(`the difference of given two numbers : ${ans.toString()}`)}
   
})
app.post("/multiply",(req,res) => {
   
    const {num1,num2}=req.body;

    let ans = num1 * num2;
    if (num1 < -1000000 || num2 < -1000000 || ans < -1000000)
    {  res.status(500).send("Underflow")}
    else if (typeof(num1) == "string" || typeof(num2) == "string" )
      {
        res.status(500).send("Invalid data types")
      }
   
     else if (num1 >1000000 || num2 >1000000 || ans > 1000000)
    {  
        res.status(500).send("Overflow")
    }

  
   else {
    res.status(200).send(`the product of given two numbers : ${ans.toString()}`)}
   
})
app.post("/divide",(req,res) => {
    const {num1,num2}=req.body;

    let ans = num1/num2;
    if (num2 === 0){
        res.status(500).send("Cannot divide by zero")
    }

    if (num1 < -1000000 || num2 < -1000000 || ans < -1000000)
    {  res.status(500).send("Underflow")}
    else if (typeof(num1) == "string" || typeof(num2) == "string" )
      {
        res.status(500).send("Invalid data types")
      }
    
     else if (num1 >1000000 || num2 >1000000 || ans > 1000000)
    {   
        res.status(500).send("Overflow")
    }
   else{
    
    res.status(200).send(`the division of given two numbers : ${ans.toString()}`)}
   
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;