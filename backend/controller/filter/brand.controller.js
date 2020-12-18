const Brand = require('../../model/filter/brand.model');
const Product = require('../../model/product.model');

exports.postBrand = async (req, res, next) => {
  try {
    try {
      await Brand.collection.drop();
    } catch (error) {}
    let a = {};
    const products = await Product.find();
    let brands = products
      .filter((p) => {
        if (a[p.brand]) return false;
        a[p.brand] = true;
        return true;
      })
      .map((e) => ({ brand: e.brand, gender: e.gender, category: e.category }));
    await Promise.all(brands.map(async (b) => await new Brand(b).save()));
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getBrand = async (req, res, next) => {
  // const product = await Product.find();
  const brands = await Brand.find();
  res.send(brands);
};
