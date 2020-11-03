const express = require("express");
const fs = require("fs");

const router = express.Router();

router.post("/response-e1", (req, res) => {
  const light = req.body.traffic_light;
  const sec = req.body.how_many;

  console.log(sec);
  console.log(light);

  var title = "control.xml";
  var des = `<?xml version="1.0"?>\n<control>\n\t<edgeNo>1</edgeNo>\n\t<traffic_light>${light}</traffic_light>\n\t<how_many>${sec}</how_many>\n\t<occasion>NA</occasion>\n</control>`;
  fs.writeFile("./data/" + title, des, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  });

  res.end();
});

module.exports = router;
