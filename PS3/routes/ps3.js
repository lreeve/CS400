var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('ps3',
        {
            output: "hello!"
        });
});

router.post('/', (req, res, next) => {
    res.render('ps3',
        {
            string: req.body.input,
            len: req.body.input.length
        });
});


module.exports = router;