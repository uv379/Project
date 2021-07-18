const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require("../model/userSchema");

//  send candidate details in database {mongoDB atlas}
router.post('/sendCandidateData', async (req, res) => {

    const {username, email, first_round_no, second_round_no, third_round_no} = req.body;

    if(!username || !email || !first_round_no || !second_round_no || !third_round_no){
        return res.status(422).json({error: "Please filled all the property"});
    }
    try{
        const userExist = await User.findOne({username:username});
        
        if(userExist) {
            return res.status(422).json({error: "user already Exist"});
        }

        const user = new User({username, email, first_round_no, second_round_no, third_round_no});

        await user.save();
        res.status(201).json({message: "Candidate details add successfuly"});

    }catch(err){
        console.log(err);
    }

});


module.exports = router;

