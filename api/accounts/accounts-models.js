const db = require("../../data/dbConfig");



const get=()=>{
    return db("accounts")
};
const getById=(id)=>{
    return db("accounts").where("id",id).first();
}

module.exports={
    get,
    getById
}
