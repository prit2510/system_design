console.log(`we love system disgn`)
const util=require("./util") //import modules in node for js files
//&get a data form server 
//^post store data using post  (create)
//?patch (update)
//!put use add statick file 
//*delete

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/
const ex=require("express") //import modules in node for js files
const app=ex()
const port=3000
app.get("/",(req,res)=>{
    res.send(`welcome to patel pizza shop`)
})   
//!get data form url ex./order/213
app.get("/order/:x",(req,res)=>{
    const id=req.params.x

    res.send(`order id is ${parseInt(id)+1}`)
})

app.listen(port,()=>{
    console.log(`surver is runing on ${port}`)
})