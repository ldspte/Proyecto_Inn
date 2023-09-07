const axios = require('axios');
const { usersInfo, ideaInfo, tableInfo } = require('./dbInfo');
const {Enterprice, Table } = require('../db')



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

const updateSales = async(sales, utility) => {
    Enterprice.sales = sales;
    Enterprice.utility = utility;
    return await Enterprice.sales.concat(Enterprice.utility);
}

const getUtility = async() => {
    const utility = await Enterprice.utility;
    return utility;
}

const updateTable = async(id, name , definition) => {
    const tables =  await tableInfo();
    const updateTable = await tables.findByPk(id);
    updateTable.name = name;
    updateTable.definition = definition;
    return updateTable;
}


const deleteTable = async(id) => {
    const tables = await tableInfo();
    const deleteTable = await tables.findByPk(id);
    return await axios.delete(deleteTable);
}







module.exports={
    getinfoenterprice,
    getSentence,
    updateSentence,
    postTable,
    getTable,
    getSales,
    getUtility,
    updateSales,
    updateTable,
    deleteTable

}