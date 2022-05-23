
const tableNameData = require("../Model/tablename")
module.exports = {
    DeleteNameofTable: async (req, res) => {
        const { body } = req
        const _id = req.params.id
        console.log(_id, "id")
        await tableNameData.findByIdAndDelete({ _id: _id })
            .then(result => {
                if(result){
                    console.log(result,"deleted Id")
                    return res.send({
                        status: 201,
                        sucess: true,
                        msg: "id found and deleted",
                    })
                }
                else{
                    console.log(result,"deleted Id")
                    return res.send({
                        status: 404,
                        sucess: false,
                        msg: "Id Not Found",
                    })
                }
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