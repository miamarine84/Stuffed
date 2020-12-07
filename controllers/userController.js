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
      console.log("there was an error findind the user", err)
    })
  },
  liked: function (req, res) {
    db.User.update(
      {
        username: req.body.currentUser
      },
      {
        $push: { likedRestaurants: req.body.button }
      }
    ).then(dbLiked => {
      res.json(dbLiked)
    }).catch(err => {
      res.sendStatus(404)
      console.log(err)
    })
  }

};
