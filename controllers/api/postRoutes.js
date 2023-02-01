const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// POST route to create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE route to delete a post and its associated comments
router.delete('/:id', withAuth, async (req, res) => {
  try {
    console.log(req.params.id)
    const commentData = await Comment.destroy({
      where: {
        post_id: req.params.id,
      }
    });
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// TODO: debug update post functionality
// UPDATE route to update a post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      } 
    }
    );

    res.status(200).json(updatedPost);
    
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

module.exports = router;