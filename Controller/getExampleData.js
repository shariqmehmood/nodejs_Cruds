const express = require("express");
const mongoose = require("mongoose");
const AddExampleData = require("../Model/exapmledata")
module.exports = {
    getdata: async (req, res) => {
        AddExampleData.find({})
            .then(result => {
                console.log(result,"===>all_data")
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