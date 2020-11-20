const router = require("express").Router();


// Matches with "/api/posts"

// Matches with "/api/posts/:id"
router
  .route("/login").post((req,res)=>{
      res.json({
          token:"XYZ",
          name:"John Doe"
      });
  }).get((req,res)=>{
      if(req.get("Authorization")&&req.get("Authorization")==="XYZ") {
        res.json({
            token:"XYZ",
            name:"John Doe"
        });
      } else {
          res.sendStatus(401);
      }
  })

module.exports = router;
