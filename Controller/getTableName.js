const express = require("express");
const mongoose = require("mongoose");
const tableNameData = require("../Model/tablename")
module.exports = {
    getTableNames: async (req, res) => {
        tableNameData.find({})
            .then(result => {
                console.log(result, "===>all_Table_Names")
                return res.send({
                    status: 201,
                    sucess: true,
                    msg: "data recived",
                })
            })
            .catch(err => {
                console.log(err);
                return res.send({
                    status: 500,
                    sucess: false,
                    msg: "error",
                })
            })
    }


}