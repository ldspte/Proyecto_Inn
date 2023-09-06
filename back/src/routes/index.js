const { Router } = require('express');
const { 
    getinfoenterprice, 
    getSentence,
    updateSentence,
    getSales,
    getUtility,
} = require('../controllers/index'); 

const router = Router()


router.get('/strategy/reason_chance', (req, res) => {
    try {
        const sentence = getSentence();
        if (sentence.error) throw new Error (sentence.error)
        return res.status(200).json(sentence);
    } catch (error) {
        return res.status(404).send(error.message);
    }
});


router.put('/strategy/reason_chance', (req, res) => {
    try {
        const { sentence } = req.body
        if (!sentence) throw new Error('Debes llenar este campo');
        const newSentence = updateSentence(sentence);
        if(newSentence.error) throw Error (newSentence.error);
        return res.status(200).json(newSentence);
    } catch (error) {
        return res.status(404).send(error.message);
        
    }
})

router.get('/strategy/growth', (req, res) => {
    try {
        const sales = getSales();
        const utility = getUtility();
        if (sales.error || utility.error) throw new Error (sales.error || utility.error);
        return res.status(200).json({sales, utility});
    } catch (error) {
        return res.status(404).send(error.message);
    }
});



module.exports = router