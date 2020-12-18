exports.getFilters = (req, res, next) => {
  const activeFilters = {
    gender: req.query.gender ? req.query.gender : /^/,
    category: req.query.category ? req.query.category : /^/,
    gender: req.query.gender ? req.query.gender : /^/,
  };
};
