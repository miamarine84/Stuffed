const db = require("../models");
const md5=require("md5");

// Defining methods for the postsController
module.exports = {
  register: function(req, res) {
    db.User.create({
        username:req.body.username.toLowerCase(),
        password:md5(req.body.password)
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(409).json(err));
  },
  findUser: function(req,res){
    db.User.find({
      username:req.body.username.toLowerCase()
    }).then(dbUser=>{
      res.json(dbUser)
    }).catch(err=>{
      console.log("there was an error findind the user",err)
    })
  },
};
