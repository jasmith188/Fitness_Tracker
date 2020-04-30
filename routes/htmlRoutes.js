const router = require("express").Router();
const path = require("path");

//router paths
//homeworks says don't need
//loading html
// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/index.html"));
//   });

//loading the exercise html
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/exercise.html"));
  });

//loads the stats html
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/stats.html"));
  });



  module.exports = router;