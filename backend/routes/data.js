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
  console.log(query)
  let price = query.price?.split(" ") || [];
  let item = query.item?.split(",") || [];
  let category = query.category;

//   let filter = {}

// if(category)
// {
//   filter.category = category
// }
// if(price.length>0)
// {
//   filter.price = price
// }
// if(item.length>0)
// {
//   filter.item = item
// }

// let data = await DataModel.find({
//     $and: [{ price: { $gte: filter.price[0] } }, { price: { $lte: filter.price[1] },item: {$all: item} }],
//   });
//   res.send(data);
  //   let search = {
  //     item: query.item?.split(",") || [],
  //   };
  // console.log(item)
  if (price.length > 0 && item.length > 0 && category) {
    console.log("all");
    let data = await DataModel.find({
      $and: [{ price: { $gte: price[0] } }, { price: { $lte: price[1] },item: {$all: item},category }],
    });
    // let data = await DataModel.find({
    //     item: { $all: item },
    //     price: { $gte: price[0] },
    //     price: { $lte: price[1] },
    //     category
    //   });
    // let newData = data.filter((el) => item.includes(el.item));
    // console.log(data);
    res.send(data);
  } else if (price.length > 0 && item.length > 0) {
    //PI
    let data = await DataModel.find({
        $and: [{ price: { $gte: price[0] } }, { price: { $lte: price[1] },item: {$all: item} }]
      });
    res.send(data);
  } else if (price.length > 0 && category) {
    //PC
    console.log("pc");
    let data = await DataModel.find({
        $and: [{ price: { $gte: price[0] } }, { price: { $lte: price[1] },category }],
      });
    res.send(data);
  } else if (item.length > 0 && category) {
    //IC
    console.log("IC");
    let data = await DataModel.find({ item: { $all: item }, category });
    res.send(data);
  } else if (item.length > 0 && price.length > 0) {
    //IP
    let data = await DataModel.find({
      item: { $all: item },
      price: { $gte: price[0] },
      price: { $lte: price[1] },
    });
    console.log(data);
    res.send(data);
  }else if(price.length>0){
    let data = await DataModel.find({
        $and: [{ price: { $gte: price[0] } }, { price: { $lte: price[1] } }],
      });
      res.send(data)
  }else if(item.length>0){
    //I
    
    let data = await DataModel.find({ item: { $all: item } });
    res.send(data);
  }else{
    // C
    let data = await DataModel.find({category});
    res.send(data);
  }
});

module.exports = {
  dataRouter,
};
