const db = require("../models");
const md5=require("md5");

// Defining methods for the postsController
module.exports = {
  register: function(req, res) {
    db.User.create({
        email:req.body.email.toLowerCase(),
        password:md5(req.body.password)
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(409).json(err));
  },
  findUser: function(req,res){
    db.User.find({
      email:req.body.email.toLowerCase()
    }).then(dbUser=>{
      res.json(dbUser)
    }).catch(err=>{
      console.log("there was an error findind the user",err)
    })
  }
};
