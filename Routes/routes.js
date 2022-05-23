const express = require("express");
let routes = express.Router();
const {Exampledata}=require("../Controller/addExampleData")
const {getdata}=require("../Controller/getExampleData")
const {TableData}=require("../Controller/tableNameController")
const {getTableNames}=require("../Controller/getTableName")
const {DeleteNameofTable}=require("../Controller/deleteTableName")
const {EditNameofTable}=require("../Controller/editTableName")


// post Apis//
routes.post("/adddata", Exampledata);
routes.post("/addtablename", TableData);
routes.post("/deletetablename/:id", DeleteNameofTable);
routes.post("/edittablename/:id", EditNameofTable);




// get Apis//
routes.get("/getdata", getdata);
routes.get("/gettablename", getTableNames);








module.exports = routes;