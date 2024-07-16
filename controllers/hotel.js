const Hotel = require("../models/hotel");
const createHotel = async (req, res) => {
  try {
    const { name, type, city, address, distance, rating, description } =
      req.body;

    console.log(name, type, city, distance, rating, description);
    const newHotel = new Hotel({
      name: name,
      type: type,
      city: city,
      address: address,
      distance: distance,
      rating: rating,
      description: description,
    });
    
    const saveHotel = await newHotel.save();
    res.status(200).json({ status: "hotelcreated" });
  } catch (error) {
    res.json({ status: "something went wrong" }).status(400);
  }
};
const getHotel = async(req,res) =>
    {
        res.send("hiii....")
    }
module.exports = createHotel


