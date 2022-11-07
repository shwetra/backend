const { json } = require("express");
const jwt=require("jsonwebtoken");

const authentication=(req,res,next)=>{
	const token=req.headers.authorization.split(" ")[1];
	jwt.verify(token,"secret",(err,decoded)=>{
		if(err) return res.send({msg:"Please Login"})

		req.body.email=decoded.email;
		// res.send({msg:decoded.email})
		next()
	})
}

module.exports=authentication;