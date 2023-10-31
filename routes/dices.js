var express = require('express');
var router = express.Router();

router.post('/d20', (req, res, next) => {
    res.status(200);
    myJson = {
        player: "test-player",
        dice: "d20",
        result: Math.floor(Math.random()*20)
    }
    req.body = myJson
    res.render('index',
        myJson
    );
})

router.get('/', (req, res, next) => {
    res.render('d20');
})

module.exports = router;