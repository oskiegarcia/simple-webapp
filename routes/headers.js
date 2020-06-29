var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let headersObj = {};

    Object.keys(req.headers).forEach(key =>{
        headersObj[key] = req.headers[key];
    })

    console.log(headersObj);

    res.render('headers', {headers: headersObj});
});

module.exports = router;
