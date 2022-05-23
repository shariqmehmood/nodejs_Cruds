
const tableNameData = require("../Model/tablename")
module.exports = {
    EditNameofTable: async (req, res) => {
        const { body } = req
        const _id = req.params.id
        // console.log(_id, "id")
        await tableNameData.findByIdAndUpdate({ _id: _id }, body)
            .then(result => {
                console.log(result);
                return res.send({
                    status: 200,
                    sucess: true,
                    msg: "updated",
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

