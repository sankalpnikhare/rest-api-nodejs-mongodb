const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const jwtAuth = (req,res,next) => {
    try{
        const token  =  req.cookies.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Authentication required. Please Login First."
            })
        }

        const decoded = jwt.verify(
            token,
            secret

        )
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Invalid or Expired Token"
        })
    }


}

module.exports = jwtAuth ; 
