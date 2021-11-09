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


router.get('/gallery2', function(req, res, next) {
    res.render('gallery2', { title: 'Express' });
});

router.get('/gallery3', function(req, res, next) {
    res.render('gallery3', { title: 'Express' });
});

router.get('/gallery4', function(req, res, next) {
    res.render('gallery4', { title: 'Express' });
});

router.get('/gallery5', function(req, res, next) {
    res.render('gallery5', { title: 'Express' });
});

router.get('/gallery6', function(req, res, next) {
    res.render('gallery6', { title: 'Express' });
});

router.get('/ovgallery', function(req, res, next) {
    res.render('ovgallery', { title: 'Express' });
});


router.get('/blog', function(req, res, next) {
    res.render('blog', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});


module.exports = router;
