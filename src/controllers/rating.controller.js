const Rating = require('../models/rating.model');

exports.addRating = async (req, res) => {
  const { productId, comment, star } = req.body;
  const rating = await Rating.create({ productId, userId: req.user.id, comment, star });
  res.json(rating);
};

exports.getRatingsByProduct = async (req, res) => {
  const ratings = await Rating.find({ productId: req.params.id });
  res.json(ratings);
};

exports.updateRating = async (req, res) => {
  const rating = await Rating.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(rating);
};

exports.deleteRating = async (req, res) => {
  await Rating.findByIdAndDelete(req.params.id);
  res.json({ message: 'Rating deleted' });
};
