import express from "express"

const app = express()

app.use(express.json())

app.post("/users",(req,res)=>{
    const { username, password } = req.body
    if (!username || !password){
        return res.status(400).json({error:"Username and password are required"})
    }
    res.status(200).json({userId:12345,message: "User created" });
})

export default app