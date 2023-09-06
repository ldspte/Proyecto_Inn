const { Idea, Table, User} = require('../db');

const ideaInfo = async() => {
    return await Idea.findAll()
}

const usersInfo = async() => {
    return await User.findAll()
}

const tableInfo = async() => {
    return await Table.findAll()
}


module.exports = { 
    ideaInfo,
    usersInfo,
    tableInfo
}