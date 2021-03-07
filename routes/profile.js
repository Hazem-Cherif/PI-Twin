const express = require('express');
const router = express.Router();

//@route   GET api/profile
//@desc    Get all users profile
//@access  Private
router.get('/', (req,res)=> {res.send('Get all profile');
});

//@route   Post api/profile
//@desc    Add new profile 
//@access  Private
router.post('/', (req,res)=> {res.send('Add profile');
});

//@route   PUT api/profile/:id
//@desc    Update profile 
//@access  Private
router.put('/:id', (req,res)=> {res.send('Update profile');
});

//@route   DELETE api/profile/:id
//@desc    Delete profile 
//@access  Private
router.delete('/:id', (req,res)=> {res.send('Delete profile');
});

module.exports = router;