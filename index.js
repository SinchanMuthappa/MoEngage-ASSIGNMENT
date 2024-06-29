const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/brewery', { useNewUrlParser: true, useUnifiedTopology: true });

const reviewSchema = new mongoose.Schema({
    breweryId: String,
    rating: Number,
    text: String
});

const Review = mongoose.model('Review', reviewSchema);

// Endpoint to submit a review
app.post('/reviews', async (req, res) => {
    const { breweryId, rating, text } = req.body;
    const review = new Review({ breweryId, rating, text });
    await review.save();
    console.log("Success")
    res.status(201).json({ message: 'Review added successfully' });
});

// Endpoint to get reviews for a specific brewery
app.get('/reviews/:breweryId', async (req, res) => {
    const breweryId = req.params.breweryId;
    const reviews = await Review.find({ breweryId });
    res.json(reviews);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
