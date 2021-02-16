const db = require("../../data/dbConfig");



const get=()=>{
    return db("accounts")
};
const getById=(id)=>{
    return db("accounts").where("id",id).first();
}
const create=(newAccount)=>{
    return db("accounts").insert(newAccount)
        .then(([id])=>{
            return db("accounts").where("id",id).first();
        })
}
const update = (id, changes) =>{
    const accountId = id;
        return db("accounts").where("id",id).update(changes)
            .then(()=>{
                return db("accounts").where("id", accountId).first();
            }) 
}
const remove = (id)=>{
    return db("accounts").where("id",id).del()
        .then(()=>{
            return db("accounts")
        })
}   

module.exports={
    get,
    getById,
    create,
    update,
    remove
}
