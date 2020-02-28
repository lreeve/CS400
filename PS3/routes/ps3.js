var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const string = req.query.string;
    res.render('ps3',
        {
            string: "hello"
        });
});

router.post('/', (req, res, next) => {
    const string = req.body.string;
    let len = string.length;
    res.send(
        {
            string: string,
            length: len
        });
});


module.exports = router;