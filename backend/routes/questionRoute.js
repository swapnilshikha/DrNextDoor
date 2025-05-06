// routes/questionRoute.js
const express = require('express');
const router = express.Router();
const Question = require('../models/QuestionModel.js'); // Adjust path as needed

// POST route to submit a question
router.post('/', async (req, res) => {
  try {
    const { question, email } = req.body;

    if (!question || !email) {
      return res.status(400).json({ message: 'Please provide both a question and an email.' });
    }

    const newQuestion = new Question({
      question,
      email,
    });

    const savedQuestion = await newQuestion.save();
    console.log('Question saved:', savedQuestion);
    res.status(201).json({ message: 'Question received successfully!', data: savedQuestion });

  } catch (error) {
    console.error('Error handling question submission:', error);
    res.status(500).json({ message: 'Failed to submit question due to a server error.' });
  }
});

// GET route to retrieve all submitted questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find().sort({ timestamp: -1 }); // Fetch all questions, newest first
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error retrieving questions:', error);
    res.status(500).json({ message: 'Failed to retrieve questions due to a server error.' });
  }
});

module.exports = router;