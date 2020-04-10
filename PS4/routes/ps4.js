const express = require('express');
const router = express.Router();
const request = require('request')

router.get('/', function(req, res, next) {
    const options = {
        method: 'GET',
        url: 'http://api.divesites.com',
        hostname: 'api.divesites.com',
        port: null,
        path: '',
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log("body:", body);

        const data = JSON.parse(body);
        console.log("results parsed:", data);

        res.render('ps4', {title: 'Want to know the nearest dive site?', num: Object.keys(data.sites).length,
            name: data.sites[0].name, dist: data.sites[0].distance});
        res.render('ps4', {title: 'Distance: ', dist: data.sites[0]});
    })
});

module.exports = router;