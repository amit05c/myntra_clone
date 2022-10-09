const { Router } = require("express");
const dataRouter = Router();
const { DataModel } = require("../model/data.model");
dataRouter.get("/", async (req, res) => {
  // res.send({message: })
  let data = await DataModel.find();
  res.send({ message: data });
});

dataRouter.get("/singleProd/:_id", async (req, res) => {
  let { _id } = req.params;

  console.log(_id);
  let data = await DataModel.findOne({ _id });
  console.log(data);

  console.log("amit");
  res.send(data);
});

dataRouter.get("/sort", async (req, res) => {
  let data = await DataModel.find().sort({ price: 1 });
  console.log(data);
  res.send(data);
});

dataRouter.get("/filter", async (req, res) => {
  let query = req.query;
  // console.log(query)
  let price = query.price?.split(" ") || [];
  let item = query.item?.split(",") || []
  let category = query.category;

  let search = {
    item: query.item?.split(",") || [],
  };
  // console.log(item)
  if (price.length > 0 && item.length > 0 && category.length > 0) {
    console.log("all")
    let data = await DataModel.find({
      item: { $all: item },
      price: { $gte: price[0] },
      price: { $lte: price[1] },
      category,
    });
    console.log(data);
    res.send(data);
  } else if (price.length > 0 && item.length > 0) {
    let data = await DataModel.find({
      item: { $all: item },
      price: { $gte: price[0] },
      price: { $lte: price[1] },
    });
    res.send(data);
  } else if (price.length > 0 && category.length > 0) {
    console.log("pc")
    let data = await DataModel.find({
      price: { $gte: Number(price[0]) },
      price: { $lte: Number(price[1]) },
      category,
    });
    res.send(data);
  } else if (item.length > 0 && category.length > 0) {
    console.log("IC")
    let data = await DataModel.find({ item: { $all: item }, category });
    res.send(data);
  }else if(item.length>0 && price.length>0){
    let data = await DataModel.find({item: {$all: item} ,price: {$gte:price[0]}, price :{$lte: price[1]}})
    console.log(data)
    res.send(data) 
  }



});

module.exports = {
  dataRouter,
};
