/* GET 'home' page */
module.exports.homelist = function(req, res) {
  res.render('locations-list', {title: 'Home'});
};

/* GET 'Location info' page */
module.exports.locationInfor = function(req, res) {
  res.render('location-infor', {title: 'Location infor'});
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', {title: 'Add review'});
};