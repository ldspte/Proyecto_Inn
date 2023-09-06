const axios = require('axios');
const { usersInfo, ideaInfo, tableInfo } = require('./dbInfo');
const {Enterprice, Table } = require('../db')


let id = 0;


const getinfoenterprice = async() => {
    const info = await Enterprice;
    return info;
};

const getSentence = async() => {
    const infosentence = getinfoenterprice();
    return infosentence.sentence;
}

const updateSentence = async(sentence) => {
    Enterprice.sentence = sentence;
    return await Enterprice.sentence
};

const getTable = async() => {
    const alltables = await tableInfo();
    return alltables;
};

const postTable = async(name, definition) => {
    const newTable = {
        name,
        definition,
    }
    return await Table.push(newTable);

}

const getSales = async() => {
    const sales = await Enterprice.sales;
    return sales;
}

const getUtility = async() => {
    const utility = await Enterprice.utility;
    return utility;
}



const deleteTable = async(id) => {

}







module.exports={
    getinfoenterprice,
    getSentence,
    updateSentence,
    postTable,
    getTable,
    getSales,
    getUtility,
    deleteTable

}