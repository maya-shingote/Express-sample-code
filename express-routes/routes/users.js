const express= require('express');
const router
= express.Router()

app.get("",(req,ses)  =>{
    res.send({data: "hello boss im here"})
}
 
)

app.post (".", (req,res) => {
    res.send({data : "heye raga iam here"}
    )
})

app.put ("./", (res, res) => {
    res.send ({data:"i would like to take a lunch with you"})

}
)

app.delete ("./", (req,res) =>  {
    res.send({data:"Radhe radhe"})
})

module.export = router;
