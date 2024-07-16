const express = require("express");
const router = express.Router();
const Hotel = require("../models/hotel");
const { default: hotel } = require("../models/hotel");
const createHotel = require("../controllers/hotel")
const getHotel = require("../controllers/hotel");
const { route } = require("./user");

router.post("/create",createHotel);

router.get("/", async (req, res) => {
  try {
    const HotelData = await Hotel.find();

    res.json(HotelData).status(200);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
// router.get("/test",getHotel)

router.put("/edit/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    
    });

    res.json({ status: "updated successfully" }).status(200);
  } catch (err) {
    res.status(400).json({ status: "some thing went wrong" });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleteHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.json({ status: "deleted succesfully" }).status(200);
  } catch (error) {
    res.json({ status: "some thing went wrong" }).status(400);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.json(getHotel).status(200);
  } catch (error) {
    res.json({ status: "some thing went wrong" }).status(400);
  }
});
router.get("/getcity/:city", async (req, res) => {
  try {
     const city = req.params.city
    const getHotel = await Hotel.find({city:{$eq:req.params.city}})
    
    if(getHotel.length == 0)
    {
      res.json({status:`not hotel in the ${city} `})
    }
    else
    {
      res.json(getHotel).status(200);
    }
    
  } catch (error) {
    res.json({ status: "some thing went wrong" }).status(400);
  }
});


module.exports = router;
