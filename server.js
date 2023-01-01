const express=require ('express');
const bodyparser=require ('body-parser');
const path=require ('path');
const route= require ('./routes');
const port=8081;

const app=express();
route(app);

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json);
app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`server is listening on ${port}`);
});

