const path = require("path");
const animal = require("../models/animal");
const router = require("express").Router();
const apiRoutes = require("./api/Routerindex");

// API Routes
router.use("/api", apiRoutes);
// router.get('/api', (req, res) => {

//   animal.find({ })
//     .then((data) => {
//       console.log('animalseed: ', animalseed)
//     })
//     .catch((error) => {
//       console.log('error: ', animaerrorlseed )
//     });
// });

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
