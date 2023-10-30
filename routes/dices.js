var express = require('express');
var router = express.Router();

router.post('/20', (req, res, next) => {
    res.status(200);
    res.json(
        {
            player: "test-player",
            dice: "d20",
            result: Math.floor(Math.random()*20)
        }
    );

})

router.get('/20', (req, res, next) => {
    res.render('d20', { diceResult: Math.floor(Math.random()*20) })
})

module.exports = router;