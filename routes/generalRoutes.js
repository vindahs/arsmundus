var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/blog-single', function(req, res, next) {
    res.render('blog-single', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});
router.get('/gallery', function(req, res, next) {
    res.render('gallery', { title: 'Express' });
});
router.get('/main', function(req, res, next) {
    res.render('main', { title: 'Express' });
});
router.get('/gallery', function(req, res, next) {
    res.render('gallery', { title: 'Express' });
});

router.get('/blog', function(req, res, next) {
    res.render('blog', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});


module.exports = router;
