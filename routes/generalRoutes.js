var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});
router.get('/Oceano', function(req, res, next) {
    res.render('Oceano', { title: 'Express' });
});
router.get('/main', function(req, res, next) {
    res.render('main', { title: 'Express' });
});

router.get('/OMG', function(req, res, next) {
    res.render('OMG', { title: 'Express' });
});

router.get('/purpletana', function(req, res, next) {
    res.render('purpletana', { title: 'Express' });
});

router.get('/hamu', function(req, res, next) {
    res.render('hamu', { title: 'Express' });
});

router.get('/myessence', function(req, res, next) {
    res.render('myessence', { title: 'Express' });
});


router.get('/hamu', function(req, res, next) {
    res.render('hamu', { title: 'Express' });
})


router.get('/saviesa', function(req, res, next) {
    res.render('saviesa', { title: 'Express' });
});

router.get('/ovgallery', function(req, res, next) {
    res.render('ovgallery', { title: 'Express' });
});

router.get('/burna', function(req, res, next) {
    res.render('burna', { title: 'Express' });
});


router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});


module.exports = router;
