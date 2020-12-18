const Category = require('../../model/filter/category.model');
const Product = require('../../model/product.model');

exports.postCategory = async (req, res, next) => {
  try {
    try {
      await Category.collection.drop();
    } catch (error) {}
    let a = {};
    const products = await Product.find();
    const categories = products
      .filter((p) => {
        if (a[p.category]) return false;
        a[p.category] = true;
        return true;
      })
      .map((e) => ({ category: e.category, gender: e.gender }));
    await Promise.all(
      categories.map(async (e) => await new Category(e).save())
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getCategory = async (req, res, next) => {
  res.sendStatus(404);
};
