const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET route to read all posts and display posts and comments on homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        { 
          model: Comment, include: [{model: User}]
        }
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to read post by id and display post and comments on 'post' page
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment, include: [{model: User}]
        }
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to render 'newpost' page
router.get('/newpost', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('newpost', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: debug update post functionality
// GET route to render 'updatepost' page
router.get('/updatepost/:id', withAuth, async (req, res) => {
  try {

    const userData = await Post.findByPk(req.params.id, {
      // attributes: { exclude: ['password'] },
      include: [{ model: User }],
    });

    const user = userData.get({ plain: true });

    res.render('updatepost', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to render 'login' page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

// GET route to render users' posts on 'dashboard' page
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        { 
          model: Comment
        }
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { 
      posts, 
      logged_in: req.session.logged_in,
      username: req.session.username 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;