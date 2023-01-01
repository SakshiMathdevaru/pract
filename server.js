const express=require ('express');
const path=require ('path');

const app=express();


app.use(express.static(path.join(__dirname,"public")));

app.get("/",function(req,resp){
    resp.sendFile(path.join(__direname+"/index.html"));
});

app.listen(8081);
console.log("server is listening on 8081");
