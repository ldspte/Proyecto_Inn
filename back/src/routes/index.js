const { Router } = require('express');
const { 
    getinfoenterprice, 
    getSentence,
    updateSentence,
    getSales,
    getUtility,
    updateSales,
    getTable,
    postTable,
    updateTable,
    updateTable
} = require('../controllers/index'); 

const router = Router()

router.get('/strategy/index', (req, res) =>{
    try {
        const allInfo = getinfoenterprice();
        if (allInfo.error) throw new Error (allInfo.error);
        return res.status(200).json(allInfo);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})


router.get('/strategy/reason_chance', (req, res) => {
    try {
        const sentence = getSentence();
        if (sentence.error) throw new Error (sentence.error);
        return res.status(200).json(sentence);
    } catch (error) {
        return res.status(404).send(error.message);
    }
});


router.put('/strategy/reason_chance', (req, res) => {
    try {
        const { sentence } = req.body;
        if (!sentence) throw new Error('Debes llenar este campo');
        const newSentence = updateSentence(sentence);
        if(newSentence.error) throw Error (newSentence.error);
        return res.status(200).json(newSentence);
    } catch (error) {
        return res.status(404).send(error.message);
        
    }
});

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

router.put('/strategy/growth', (req, res) =>{
    try {
        const {sales, utility} = req.body;
        if (!sales || !utility) throw new Error('Debes llenar todos los campos');
        const newsales = updateSales(sales, utility);
        if (newsales.error) throw new Error(newsales.error);
        return res.status(200).json(newsales);
    } catch (error) {
        return res.status(404).send(error.message);
    }
});

router.get('/strategy/table', (req, res) => {
    try {
        const tables = getTable();
        if (tables.error) throw new Error(tables.error);
        return res.status(200).json(tables);
    } catch (error) {
        return res.status(404).send(error.message);
    };
});

router.post('/strategy/table', (req, res) => {
    try {
        const {name , definition} = req.body;
        if (!name || !definition) throw new Error ('Debes llenar todos los campos');
        const newtable = postTable(name,definition);
        if (newtable.error) throw new Error(newtable.error);
        return res.status(200).json(newtable);
    } catch (error) {
        return res.status(404).send(error.message);
    };
});

router.put('/strategy/table', (req, res) => {
    try {
        const {id, name, definition} = req.params;
        if (!name || !definition) throw new Error ('Debes llenar todos los campos');
        const updatetable = updateTable(id, name, definition);
        if(updatetable.error) throw new Error (updatetable.error);
        return res.status(200).json(updatetable);
    } catch (error) {
        return res.status(404).send(error.message);
    };
});

router.delete('/strategy/table', (req, res) => {
    try {
        
    } catch (error) {
        
    }
})


module.exports = router