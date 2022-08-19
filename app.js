const express = require("express");
const bodyParser = require("body-parser");
const { application } = require("express");

const app = express(); 
const items= ["Something"];
const workItem= [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs"); 

app.get("/", function(req, res){
    let today = new Date();
    
    let options = { 
        weekday: 'long',
        day: 'numeric',
        month: 'long',    
    }
    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {listTitle: day, newListItems:items});

});

app.post("/", function(req, res){

    let item = req.body.newItems;
    if(req.body.list === "Work"){
        workItem.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
    
})

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems:workItem});
    
});


app.listen(3000, function(){
    console.log("Sever work at port 3000");

});