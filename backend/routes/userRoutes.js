const { Router } = require('express');
const User = require('../models/User');
const protect = require('../middleware/authMiddleware');

const router = Router();

// Get user profile
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile' });
  }
});

// Update user score
router.put('/update-score', protect, async (req, res) => {
  try {
    const { score } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.score += score;
    await user.save();

    res.json({ message: 'Score updated successfully', score: user.score });
  } catch (error) {
    res.status(500).json({ message: 'Error updating score' });
  }
});

module.exports = router;
