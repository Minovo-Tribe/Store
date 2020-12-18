const Product = require('../model/product.model');
const Category = require('../model/filter/category.model');
const Brand = require('../model/filter/brand.model');

const MAX_PAGE_SIZE = 50;
const DEFAULT_PAGE_SIZE = 20;

exports.addProduct = async (req, res, next) => {
  try {
    let products = req.body.products;
    products = await Promise.all(
      products.map(async (p) => {
        await new Product(p).save();
      })
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    sendStatus(500);
  }
};
exports.getProducts = async (req, res, next) => {
  try {
    const params = resolveParams(req.query);
    const query = resolveQuery(req.query);
    const filters = await getFilter(query);
    const sort = req.query.sort;
    const order = req.query.order == 'ASC' ? 1 : -1;
    const products = await Product.find(query)
      .sort({ [sort]: order })
      .skip(params.skip)
      .limit(params.limit);
    const productsCount = await Product.countDocuments(query);
    res.send({ count: productsCount, products, filters });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const query = resolveQuery(req.query);
    let products = await Product.find(query);
    res.send({ count: products.length, products });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

function resolveParams(params) {
  try {
    const pageSize = params.pageSize
      ? parseInt(params.pageSize)
      : DEFAULT_PAGE_SIZE;
    const limit = pageSize <= MAX_PAGE_SIZE ? pageSize : MAX_PAGE_SIZE;
    const skip = params.page ? (parseInt(params.page) - 1) * limit : 0;
    return { limit, skip };
  } catch (error) {}
}

function resolveQuery(query) {
  const gender = query.gender ? query.gender : /^/;
  const category = query.category ? query.category : /^/;
  const brand = query.brand ? query.brand : /^/;
  return { gender, category, brand };
}

async function getFilter(query) {
  try {
    const filters = {
      categories: await Category.find({
        gender: query.gender,
      }),
      brands: await Brand.find({
        gender: query.gender,
        category: query.category,
      }),
    };
    return filters;
  } catch (error) {
    return null;
  }
}
