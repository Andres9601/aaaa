const { response } = require("express");
const User = require('../models/users');

const { generateJWT } = require('../helpers/generate-jwt');

const bcryptjs = require('bcryptjs')


const login = async(req, res=response) => {
    
    const {email, password} = req.body;

    try {

        //Email
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({
                msg:"User / password is incorrect - email"
            });
        }

        // user active

        if(!user.state){
            return res.status(400).json({
                msg:'User / Password is incorrect - state:false'
            })
        }

        // verify pass

        const validPassword = bcryptjs.compareSync(password,user.password);

        if(!validPassword){
            return res.status(400).json({
                msg:'User / Password is incorrect - pass'
            })
        }

        //generate JWT
        const token = await generateJWT(user.id);

        res.json({
            user,
            token
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Error login"
        })
    }

    
}

module.exports = {
    login
}