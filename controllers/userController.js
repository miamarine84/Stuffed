const db = require("../models");

// Defining methods for the postsController
module.exports = {
  searchUser: function (req, res) {  
    db.User.find({
      username: req.query.username
    }).then(dbUser => {
      console.log("This is the username:",req.query.username)
      res.json(dbUser)
    }).catch(err => {
      res.sendStatus(404)
      console.log("there was an error findind the user", err)
    })
  },
  liked: function (req, res) {
    console.log("this is the query informatin: ", req.query.likedId,req.query.currentUser)
    const currentUser=req.query.currentUser;
    const likedId =req.query.likedId;
    db.User.updateOne(
      {
        username:currentUser
      },
      {
        $push: {likedRestaurants:likedId }
      }
    ).then(dbLiked => {
      res.json(dbLiked)
      console.log("the dbLiked: ",dbLiked)
    }).catch(err => {
      res.sendStatus(404)
      console.log(err)
    })
  }

};
