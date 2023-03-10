const express = require("express");
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/AppError");

const reviews = require("../controllers/reviews");
const Campground = require("../models/campground");
const Review = require("../models/review.js");

router.post("/", isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
