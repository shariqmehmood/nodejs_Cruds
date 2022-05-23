const Tabledatascheema = require("../Model/tablename")

module.exports = {

    TableData: async (req, res) => {
        try {

            const { body } = req
            console.log(body)
            const Name = req.body.Name
            let obj = new Tabledatascheema({
                Name: Name,
            })
            obj.save().then(() => {
                return res.send({
                    status: 201,
                    sucess: true,
                    msg: "Table Name added success",
                })
            }).catch((e) => {
                return res.send({
                    sucess: false,
                    msg: "something went wrong",
                })
            })
        } catch (error) {
            return res.send({
                status: 500,
                sucess: false,
                msg: "Server Error",
            })
        }
    }
}