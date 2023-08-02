const express= require('express');
const router = express.Router()


router.get("/comments" ,(req,res) =>{
    res.send ({data:"user created"});

});

router.get("/post", (req,res) =>
{
    res.send ({data:"user added"});
})

router.put ("/put",(req,res) =>{
    res.send({data:"user updated"});
}
)

router.delete("/delete",(res,res) =>{
    res.send ({data:"user deleted" });
}
)