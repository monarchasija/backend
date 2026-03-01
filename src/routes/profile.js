const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const supabase = require('../config/supabase');

// GET /api/profile  (protected)
router.get('/profile', authMiddleware, async (req, res) => {
    const { data: user, error } = await supabase
        .from('users')
        .select('id, email, name, created_at')
        .eq('id', req.user.id)
        .single();

    if (error) return res.status(500).json({ error: error.message });

    res.json({ user });
});

module.exports = router;