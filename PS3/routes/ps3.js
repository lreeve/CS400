var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('ps3',
        {
            string: req.query.string,
            len: req.query.string.length
        });
});

router.post('/', (req, res, next) => {
    //const foo = JSON.parse((req.b.string))
    const len = length(req.body.string);
    res.send(
        {
            string: req.body.string,
            length: len
        });
});


module.exports = router;