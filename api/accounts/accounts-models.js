const db = require("../../data/dbConfig");



const get=()=>{
    return db("accounts")
};

module.exports={
    get
}
