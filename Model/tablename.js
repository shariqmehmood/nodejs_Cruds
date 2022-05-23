const mongoose = require("mongoose");
const tableNameData = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
})

let Tabledatascheema = mongoose.model("TableName", tableNameData);
module.exports = Tabledatascheema;