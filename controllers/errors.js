exports.error404 = (req, res, next) => {
  res.render("404", { pageTitle: "Page not Found!", path: '' });
};
