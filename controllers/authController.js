const db = require("../models");
const md5=require("md5");
const jwt=require("jsonwebtoken");

// Defining methods for the postsController
module.exports = {
  
  authenticate: function(req, res) {
    if(!req.get("Authorization")) {
        res.sendStatus(401);
    } else {
        try {
            const jwtPayload=jwt.verify(req.get("Authorization"),"jwtsecretpassphrase");
            db.User.findOne({
                _id:jwtPayload._id
            }).then(userAccount=>{
                if(!userAccount || md5(userAccount.email)!=jwtPayload.signature) {
                    res.sendStatus(401);
                } else {
                    const sessionToken=jwt.sign({_id:userAccount._id,signature:md5(userAccount.email)},"jwtsecretpassphrase");
                    res.json({
                        name:userAccount.name,
                        token:sessionToken
                    });
                }
            }).catch(err => res.status(401).json(err));

        } catch(error) {
            res.sendStatus(401);
        }
    }
  },
  login: function(req, res) {
    db.User.findOne({
        email:req.body.email.toLowerCase()
    })
      .then(userAccount => {
          if(!userAccount || userAccount.password!==md5(req.body.password)) {
              res.sendStatus(401);
          } else {
            const sessionToken=jwt.sign({_id:userAccount._id,signature:md5(userAccount.email)},"jwtsecretpassphrase");
            res.json({
                name:userAccount.name,
                token:sessionToken
            });

          }
      })
      .catch(err => res.status(409).json(err));
  }
};
